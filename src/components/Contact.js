import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa"; // Importing icons
import "../css/contact.css";

const Contact = () => {
  const email = "rawaamohamed616@gmail.com "; // Replace with your email
  const phoneNumber = "+20 1118248279 "; // Replace with your phone number

  return (
    <section id="contact" className="rtl arabic-text">
      <h2>تواصل معي</h2>
      <div className="contact-info">
        <div className="contact-item">
          <a href={`mailto:${email}`} className="contact-link">
            {" "}
            {/* Make email clickable */}
            <FaEnvelope className="contact-icon" />
            <span className="contact-text">{email}</span>
          </a>
        </div>
        <div className="contact-item">
          <a
            href={`https://wa.me/${phoneNumber}`}
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer" // Security best practice
          >
            {" "}
            {/* Make WhatsApp link clickable */}
            <FaPhone className="contact-icon" />
            <span className="contact-text">{phoneNumber}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
