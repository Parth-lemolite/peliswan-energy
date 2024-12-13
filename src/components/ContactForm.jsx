"use client";
import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactForm = () => {
  const recaptcha = useRef(null);
  const [isDisabed, setIsDisabled] = useState(false);
  const [message, setMessage] = useState("");
  const [msgColor, setMsgColor] = useState("text-green-500");

  // Validation Schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    mobileNo: Yup.string().required("Mobile number is required"),
    product: Yup.string().required("Please select a product"),
    description: Yup.string()
      .min(0, "Description cannot be less than 0 characters")
      .max(500, "Description cannot be more than 500 characters")
      .required("Description is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    mobileNo: "",
    product: "",
    description: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    setIsDisabled(true);
    setMsgColor("");
    setMessage(null);
    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setMsgColor("text-green-500");
        setMessage(
          "Thank you for contacting us! Our team will get back to you shortly."
        );
        setTimeout(() => {
          setMessage(null);
        }, 5000);
        resetForm();
        setIsDisabled(false);
      } else {
        const errorMessage = `Error: ${response.status}`;
        throw new Error(errorMessage);
      }
    } catch (error) {
      setIsDisabled(false);
      setMsgColor("text-red-500");
      setMessage("There was an error submitting the form. Please try again 1.");
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  };

  return (
    <div className="bg-white p-6 shadow-lg w-full">
      {message && (
        <div
          className={`px-3 py-4 my-2 text-sm ${msgColor} rounded-lg bg-green-50`}
          role="alert"
        >
          <span className="font-medium">{message}</span>
        </div>
      )}
      <div className="mt-2 md:mt-4">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values }) => (
            <Form className="space-y-6">
              {/* Name and Email Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full border border-gradient-input  rounded-lg p-3 focus:outline-none"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full border border-gradient-input  rounded-lg p-3 focus:outline-none"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>

              {/* Mobile Number and Product Dropdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="mobileNo"
                  >
                    Mobile Number
                  </label>
                  <div className="flex justify-between items-center">
                    <PhoneInput
                      id="mobileNo"
                      name="mobileNo"
                      international
                      value={values.mobileNo}
                      className="w-full border border-gradient-input custom-phone-number p-3"
                      onChange={(value) => setFieldValue("mobileNo", value)}
                    />
                  </div>
                  <ErrorMessage
                    name="mobileNo"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="product"
                  >
                    Select Product
                  </label>
                  <Field
                    as="select"
                    id="product"
                    name="product"
                    className="w-full border border-gradient-input  rounded-lg p-3 focus:outline-none"
                  >
                    <option value="" label="Select a product" />
                    <option value="Inverter" label="Inverter" />
                    <option
                      value="Monitoring & Communication"
                      label="Monitoring & Communication"
                    />
                    <option value="Batteries" label="Batteries" />
                    <option value="Solar Panels" label="Solar Panels" />
                    <option
                      value="Energy Storage Systems"
                      label="Energy Storage Systems"
                    />
                    <option value="Chargers" label="Chargers" />
                    <option value="Roof Mounting" label="Roof Mounting" />
                    <option value="Switchgear" label="Switchgear" />
                    <option
                      value="Safety & Protection Cables"
                      label="Safety & Protection Cables"
                    />
                    <option
                      value="Lugs, Ferrules & Connectors"
                      label="Lugs, Ferrules & Connectors"
                    />
                  </Field>
                  <ErrorMessage
                    name="product"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <Field
                  as="textarea"
                  id="description"
                  name="description"
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full border border-gradient-input  rounded-lg p-3 focus:outline-none"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="text-center md:flex justify-start items-center md:space-x-6 space-x-3">
                <div className="mt-2 sm:mt-0">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    ref={recaptcha}
                  />
                </div>
                <div className="text-center mt-4 sm:mt-0">
                  <button
                    type="submit"
                    disabled={isDisabed}
                    className="w-32 bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 px-6 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    {isDisabed ? (
                      <div
                        className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
                        role="status"
                        aria-label="loading"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
