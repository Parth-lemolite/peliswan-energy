import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { readFile } from "fs/promises";
import { join } from "path";

const EMAIL = process.env.EMAIL;
const PASS = process.env.PASS;
const CONTACT_TO = process.env.CONTACT_TO;

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  mobileNo: z.string().min(1, "Mobile number is required"),
  product: z.string().min(1, "Please select a product"),
  description: z.string().min(1, "Description is required"),
});

const sendMail = async (subject, body) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASS,
    },
  });

  transporter.verify((error) => {
    if (error) {
      console.error("SMTP verification error:", error);
    } else {
      console.log("SMTP server is ready to take our messages");
    }
  });

  const from = body.email;
  const to = CONTACT_TO;
  let htmlTemplate;

  try {
    const emailTemplatePath = join(process.cwd(), "/email_template.html");
    htmlTemplate = await readFile(emailTemplatePath, "utf-8");
  } catch (error) {
    console.error("Error reading file:", error);
    return;
  }

  const mailOptions = {
    from,
    to,
    subject,
    html: htmlTemplate
      .replace("[name]", body.name || "N/A")
      .replace("[email]", body.email || "N/A")
      .replace("[mobileNo]", body.mobileNo || "N/A")
      .replace("[product]", body.product || "N/A")
      .replace("[description]", body.description || "N/A"),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Mail sent successfully to email: ${to}`);
  } catch (error) {
    console.error("Error while sending mail:", error);
  }
};

export async function POST(request) {
  try {
    // Parse and validate incoming request body using Zod
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Send an email after successful validation
    await sendMail(
      `New Contact Form Submission: ${body.name}`,
      validatedData // Ensure validated data is passed
    );

    return NextResponse.json({
      message: "Data is valid and email sent successfully",
      data: validatedData,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: "Validation Error",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    console.error("Unhandled error:", error);
    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}
