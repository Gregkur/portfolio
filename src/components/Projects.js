import { React, useState } from "react";

import SingleProject from "./SingleProject";
import ModalConductor from "./ModalConstructor";

import Fade from "react-reveal/Fade";

import "../styles/Projects.css";

export default function Projects() {
  const [currentModal, setCurrentModal] = useState("");

  const background = document.querySelector(".blackout");
  const body = document.querySelector("body");

  const changeModal = (modal) => {
    setCurrentModal(modal);
    body.classList.add("noScroll");
  };

  const hideModal = () => {
    setCurrentModal("");
    body.classList.remove("noScroll");
  };

  const isBlackout = currentModal !== "";
  return (
    <section className="projects">
      <ModalConductor
        currentModal={currentModal}
        hideModal={hideModal}
        background={background}
      />
      <div className={isBlackout ? "blackout" : ""} onClick={hideModal}></div>
      <Fade left duration={1200} delay={100} fraction={0.8}>
        <h1 className="projectsTitle">PROJECTS</h1>
      </Fade>
      <div className="grid-container">
        <Fade bottom duration={1000} fraction={0.5} delay={600}>
          <SingleProject
            title="Yance sports"
            stack="Rails/React/ContextAPI/TypeScript"
            photo="yance.png"
            modal="YANCESPORTS"
            changeModal={changeModal}
          />
        </Fade>
        <Fade bottom duration={1000} fraction={0.5} delay={300}>
          <SingleProject
            title="Devbook"
            stack="MongoDB/Express/React/Redux/NodeJS"
            photo="devbook.png"
            modal="DEVBOOK"
            changeModal={changeModal}
          />
        </Fade>
        <Fade bottom duration={1200} fraction={0.8} delay={400}>
          <SingleProject
            title="Portfolio"
            stack="ReactJS"
            photo="gregk.png"
            modal="PORTFOLIO"
            changeModal={changeModal}
          />
        </Fade>
        <Fade bottom duration={1200} fraction={0.8} delay={500}>
          <SingleProject
            title="Shadr"
            stack="ReactJS/Router/NextJS"
            photo="shadr.png"
            modal="SHADR"
            changeModal={changeModal}
          />
        </Fade>
        <Fade bottom duration={1000} fraction={0.5} delay={600}>
          <SingleProject
            title="Social Book Club"
            stack="Ruby/Rails/JavaScript"
            photo="social.png"
            modal="SOCIAL"
            changeModal={changeModal}
          />
        </Fade>
        <Fade bottom duration={1000} fraction={0.5} delay={700}>
          <SingleProject
            title="Art Space"
            stack="Ruby/Rails"
            photo="art.png"
            modal="ART"
            changeModal={changeModal}
          />
        </Fade>
      </div>
    </section>
  );
}
