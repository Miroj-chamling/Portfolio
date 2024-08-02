import React, { useState } from "react";
import Title from "./Title";
import { serviceId, userId, templateId } from "../data/emailService";

import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userId);
    emailjs
      .send(
        "service_xsda2x9",
        "template_otfj8ou",
        formData,
        "NRqcq41VlKTdVKx0y"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send email.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          // action="https://getform.io/f/bxojvlka"
          // method="POST"
          className="flex flex-col w-full md:w-7/12"
          onSubmit={handleSubmit}
        >
          <Title>Contact</Title>
          <input
            required
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            required
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            required
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
