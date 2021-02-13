import React from "react";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <h1 className="contactTitle">CONTACT</h1>
        <ContactForm/>
        <Footer />
      </div>
    </>
  );
}
