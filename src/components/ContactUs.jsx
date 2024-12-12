import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <section id="contact-us" className="py-12 px-4 md:px-16 w-full bg-gray-50">
      <div className="mx-auto">
        <div className="flex justify-center">
          <h2 className="inline-block text-3xl font-semibold text-center mb-8 border-b-2 border-gradient rounded-md">
            Contact Us
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {/* Google Map (First Column) */}
          <div className="relative bg-white  shadow-lg w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.889794977059!2d72.50219477531401!3d23.027818279170123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b3a43cbc755%3A0xe2bd6a9ecdfa16ea!2sPeliswan%20Impex%20Private%20Limited!5e0!3m2!1sen!2sin!4v1733920311889!5m2!1sen!2sin"
              className=" h-72 md:h-full w-full"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="flex flex-col justify-start space-y-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
