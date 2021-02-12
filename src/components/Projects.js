import React from "react";
import SingleProject from "./SingleProject";
import Fade from "react-reveal/Fade";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <Fade left duration={1200} delay={100} fraction={0.8}>
        <h1 className="projectsTitle">PROJECTS</h1>
      </Fade>
      <div className="grid-container">
        <Fade bottom duration={1000} fraction={0.8}>
          <SingleProject
            title="Portfolio"
            stack="ReactJS"
            photo="portfolio.png"
          />
          <SingleProject
            title="Shadr"
            stack="ReactJS/Router/NextJS"
            photo="shadr.png"
          />
          <SingleProject
            title="Social Book Club"
            stack="Ruby/Rails/JavaScript"
            photo="social.png"
          />
          <SingleProject title="Art Space" stack="Ruby/Rails" photo="art.png" />
        </Fade>
      </div>
    </div>
  );
}
