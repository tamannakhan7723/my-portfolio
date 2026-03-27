"use client";

import React, { useEffect, useState } from 'react';
import { FaRegPaperPlane } from "react-icons/fa";
import MapBox from '@/components/contact/map-box';
import PageHeader from '@/components/page-header';
import config from '@/config';
import emailjs from 'emailjs-com';

const { title } = config;

function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<{ submitting: boolean; error: string | null }>({
    submitting: false,
    error: null
  });

  useEffect(() => {
    document.title = 'Contact | ${title}';
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  emailjs.send(
    'service_edo59l4',
    'template_qrj4p0m',
    {
      from_name: formData.fullname,
      from_email: formData.email,
      message: formData.message,
    },
    'KW7S7SCYnqvkxPGOP'
  )
  .then(() => {
    alert('Message sent successfully! ✅');
    setFormData({
      fullname: '',
      email: '',
      message: ''
    });
  })
  .catch((error) => {
    console.error(error);
    alert('Failed to send message ❌');
  });
};

  const isFormValid = formData.fullname && formData.email && formData.message;

  return (
    <article>
      <PageHeader header="Contact Me" />

      <section className="mb-10">

        {/* ✅ BHILAI MAP */}
        <MapBox googleMapUrl="https://www.google.com/maps?q=Bhilai,Chhattisgarh&output=embed" />

        <h3 className="text-white-2 text-2xl font-bold mb-5">Contact Form</h3>

        <p className="mb-5 text-gray-400">
          Feel free to reach out for projects, collaborations, or any queries.
        </p>

        <form onSubmit={handleSubmit} className="form">
          <div className="input-wrapper">

            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              value={formData.fullname}
              onChange={handleInputChange}
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              value={formData.email}
              onChange={handleInputChange}
            />

          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleInputChange}
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

export default Contact;