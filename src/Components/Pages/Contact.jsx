

import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from "react-toastify";
import { ContactSchema } from "../Schema/ContactSchema";

const Contact = () => {
  const URL = "https://api.durlavparajuli.com.np/api/form/contact";

  const postMessage = async (values) => {
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        toast.success("Message submitted successfully!");
      } else {
        toast.error("Failed to submit message.");
      }
    } catch (error) {
      toast.error("Server error. Please try again later.");
      console.error(error);
    }
  };

  return (
    <div className="p-10 bg-[#020617]" id="contact">
      <div className="pb-5">
      <p className="text-4xl font-bold max-w-full text-center text-blue-600">
       Contact Me <span className="text-red-500 text-4xl font-Londrina">.</span> <span className="text-yellow-500 text-4xl font-Londrina">.</span> <span className="text-green-700 text-4xl font-Londrina">.</span>
       </p>
             
</div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 opacity-85">
        {/* Contact Info */}
        <div className="bg-[#111827] p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Let's start a project together.</h2>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-lg text-blue-500">📍 Location:</p>
              <p className="text-white">Tansen,Palpa, Nepal.</p>
            </div>
            <div>
              <p className="font-semibold text-lg text-blue-500">📧 Email:</p>
              <p className="text-white">sauravgc2060@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold text-lg text-blue-500">📞 Call:</p>
              <p className="text-white">Not available now</p>
            </div>
            <div>
              <iframe
                title="Google Maps"
                className="w-full  h-52 rounded-md"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9732925158356!2d83.54617751505687!3d27.86749598270614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996a2c94b8e4f7b%3A0xa77bbd129e2f91a7!2sTansen%2C%20Palpa%2C%20Nepal!5e0!3m2!1sen!2snp!4v1708415100000!5m2!1sen!2snp"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#111827] p-6 shadow-md rounded-lg">
          <Formik
            initialValues={{ name: '', email: '', subject: '', message: '' }}
            validationSchema={ContactSchema}
            onSubmit={(values, { resetForm }) => {
              postMessage(values);
              resetForm();
            }}
          >
            {() => (
              <Form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-blue-600 font-semibold">Your Name</label>
                    <Field name="name" type="text" className="w-full p-2 border rounded" />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div>
                    <label className="block text-blue-600 font-semibold">Email</label>
                    <Field name="email" type="email" className="w-full p-2 border rounded" />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-blue-600 font-semibold">Subject</label>
                  <Field name="subject" type="text" className="w-full p-2 border rounded" />
                  <ErrorMessage name="subject" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label className="block text-blue-600 font-semibold">Message</label>
                  <Field as="textarea" name="message" rows="4" className="w-full p-2 border rounded" />
                  <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Send Message</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;