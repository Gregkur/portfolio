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
    <div name="content" className="about content">
      <Fade left duration={1200} delay={200}>
        <h1 className="aboutTitle">ABOUT</h1>
      </Fade>
      <div className="iconContainer">
        <Flip left duration={1200} fraction={0.8} delay={300}>
          <div className="iconText">
            <FontAwesomeIcon className="icon Palette" icon={faPalette} />
            <h4>Creative mind</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
        </Flip>
        <Flip left duration={1200} fraction={0.8} delay={450}>
          <div className="iconText">
            <FontAwesomeIcon className="icon People" icon={faPeopleCarry} />
            <h4>Team worker</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
        </Flip>

        <Flip left duration={1200} fraction={0.8} delay={550}>
          <div className="iconText">
            <FontAwesomeIcon className="icon Book" icon={faBookReader} />
            <h4>Rapid learner</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
        </Flip>
      </div>
      <div className="aboutContainer">
        <Fade left duration={1200} fraction={0.8}>
          <p className="aboutText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            justo orci, sollicitudin iaculis dignissim at, lacinia vel tellus.
            Nam ac ex bibendum, pulvinar ligula at, tempor sem. Phasellus a
            ullamcorper mauris. Pellentesque eu scelerisque libero. Nunc ac
            lectus hendrerit, vehicula ipsum ac, tristique est. Phasellus tempor
            enim fringilla convallis hendrerit. Cras lorem leo, pretium in
            fermentum ac, ullamcorper eget ipsum.
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
    </div>
  );
}
