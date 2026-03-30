"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaRegPaperPlane } from "react-icons/fa";
import MapBox from "@/components/contact/map-box";
import PageHeader from "@/components/page-header";
import config from "@/config";

const { title } = config;

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    document.title = 'Contact | ${title}';
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_edo59l4",
        "template_qrj4p0m",
        {
          from_name: formData.fullname,
          from_email: formData.email,
          message: formData.message,
        },
        "KW7S7SCYnqvkxPGOP"
      )
      .then(() => {
        alert("Message sent successfully ✅");
        setFormData({
          fullname: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("FULL ERROR:", error);
        alert("Error:"+JSON.stringify(error));
      });
  };

  const isFormValid =
    formData.fullname && formData.email && formData.message;

  return (
    <article>
      <PageHeader header="Contact Me" />

      <section className="mb-10">
        {/* MAP */}
        <MapBox googleMapUrl="https://www.google.com/maps?q=Bhilai,Chhattisgarh&output=embed" />

        {/* FORM */}
        <h3 className="text-white text-2xl font-bold mb-5">
          Contact Form
        </h3>

        <p className="mb-5 text-gray-400">
          Feel free to reach out for projects, collaborations, or any queries.
        </p>

        <form onSubmit={handleSubmit} className="form">
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              placeholder="Full name"
              className="form-input"
              value={formData.fullname}
              onChange={handleInputChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="form-input"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            className="form-input"
            value={formData.message}
            onChange={handleInputChange}
            required
          />

          <button
            className="form-btn"
            type="submit"
            disabled={!isFormValid}
          >
            <FaRegPaperPlane />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}