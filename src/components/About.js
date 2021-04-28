import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faPeopleCarry } from "@fortawesome/free-solid-svg-icons";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

import "../styles/About.css";

export default function About() {
  return (
    <section name="content" className="about content">
      <Fade left duration={1200} delay={200}>
        <h1 className="aboutTitle">ABOUT</h1>
      </Fade>
      <div className="iconContainer">
        <Fade duration={1200} fraction={0.8} delay={300}>
          <div className="iconText">
            <FontAwesomeIcon className="icon Palette" icon={faPalette} />
            <h4>Creative mind</h4>
            <p>
              Creating solutions to problems through creative expression,
              innovation and starting ideas to make a change.{" "}
            </p>
          </div>
        </Fade>
        <Fade duration={1200} fraction={0.8} delay={450}>
          <div className="iconText">
            <FontAwesomeIcon className="icon People" icon={faPeopleCarry} />
            <h4>Team player</h4>
            <p>
              Understanding your role in the bigger scheme of things, embracing
              collaboration, communication, accountability, and dependability.
            </p>
          </div>
        </Fade>

        <Fade duration={1200} fraction={0.8} delay={550}>
          <div className="iconText">
            <FontAwesomeIcon className="icon Book" icon={faBookReader} />
            <h4>Rapid learner</h4>
            <p>
              Having a capability of quickly understanding information,
              processing it, and applying it in practice.
            </p>
          </div>
        </Fade>
      </div>
      <div className="aboutContainer">
        <Fade left duration={1200} fraction={0.8}>
          <p className="aboutText">
            My name is Grzegorz, but please, call me Greg.
            <br />
            Born in Poland, but found home in Germany. Full-stack web developer
            with a passion for clever, innovatory, interactive, responsive, and
            scalable technologies. Young creative eager to take on new
            challenges, projects, and opportunities. Perfectionist, part-time
            philosopher, and coffee geek with over 7 years of experience in the
            speciality coffee industry as a barista, trainer, manager and
            competitor.
            <br />
            And yes, I really like the colour yellow
          </p>
        </Fade>
        <Fade right duration={1200} fraction={0.6}>
          <img
            className="profilePhoto"
            src="images/profile.jpg"
            alt="profile"
          />
        </Fade>
      </div>
    </section>
  );
}
