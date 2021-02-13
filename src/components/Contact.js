import { React, useState } from "react";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import Snackbar from "./Snackbar";

import Fade from "react-reveal/Fade";

import "../styles/Contact.css";

export default function Contact() {
  const [snackbarShowing, setSnackbarShowing] = useState(false);

  const makeSnackbarAppear = () => {
    setSnackbarShowing(true);
    setTimeout(() => {
      setSnackbarShowing(false);
    }, 3000);
  };
  return (
    <>
      {snackbarShowing && <Snackbar />}
      <div className="contact">
        <Fade left duration={1200} delay={200}>
          <h1 className="contactTitle">CONTACT</h1>
        </Fade>
        <Fade bottom duration={1200} fraction={0.8}>
          <div className="contactTextContainer">
            <h2>Wanna be friends...</h2>
            <h3>...or colleagues?</h3>
          </div>
          <div className="contactFormContainer">
            <ContactForm showSnackbar={makeSnackbarAppear} />
          </div>
        </Fade>
        <Footer />
      </div>
    </>
  );
}
