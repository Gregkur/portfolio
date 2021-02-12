import React from "react";
import SingleProject from "./SingleProject";
import Fade from "react-reveal/Fade";
import "../styles/Projects.css";

export default function Projects(props) {
  const {changeModal} = props
  return (
    <div className="projects">
      <Fade left duration={1200} delay={100} fraction={0.8}>
        <h1 className="projectsTitle">PROJECTS</h1>
      </Fade>
      <div className="grid-container">
        <Fade bottom duration={1200} fraction={0.8}>
          <SingleProject
            title="Portfolio"
            stack="ReactJS"
            photo="portfolio.png"
            modal="PORTFOLIO"
            changeModal={changeModal}
          />
        </Fade>
        <Fade bottom duration={1200} fraction={0.8} delay={300}>
          <SingleProject
            title="Shadr"
            stack="ReactJS/Router/NextJS"
            photo="shadr.png"
            modal="SHADR"
            changeModal={changeModal}
          />
        </Fade>
        <Fade bottom duration={1200} fraction={0.8} delay={500}>
          <SingleProject
            title="Social Book Club"
            stack="Ruby/Rails/JavaScript"
            photo="social.png"
            modal="SOCIAL"
            changeModal={changeModal}
          />
        </Fade>
        <Fade bottom duration={1200} fraction={0.8} delay={700}>
          <SingleProject
            title="Art Space"
            stack="Ruby/Rails"
            photo="art.png"
            modal="ART"
            changeModal={changeModal}
          />
        </Fade>
      </div>
    </div>
  );
}
