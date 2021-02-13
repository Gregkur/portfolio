import React from "react";
import emailjs from "emailjs-com";

// import "./ContactUs.css";

export default function ContactUs() {
  const emailID = process.env.REACT_APP_EMAIL_JS_KEY;
  const templateID = process.env.REACT_APP_TEMPLADE_ID_KEY;
  const userID = process.env.REACT_APP_USER_ID_KEY;

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(emailID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }

  return (
    <form className="contactForm" onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Name" />
      <input type="email" name="user_email" placeholder="Email" />
      <textarea name="message" placeholder="Message" />
      <button type="submit" value="Send">Send!</button>
    </form>
  );
}
