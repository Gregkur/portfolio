import React from "react";
import Fade from "react-reveal/Fade";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <Fade left duration={1200} delay={100} fraction={0.8}>
        <h1 className="projectsTitle">PROJECTS</h1>
      </Fade>
      <div className="grid-container">
        {/* TODO make into a component */}
        <Fade bottom duration={1500}>
          <div
            className="project"
            style={{
              backgroundImage:
                "linear-gradient(rgb(0 0 0 / 21%) 38%, rgba(255, 255, 255, 0) 100%),url(images/portfolio.png",
            }}>
              

            </div>
          <div
            className="project"
            style={{
              backgroundImage:
                "linear-gradient(rgb(0 0 0 / 21%) 38%, rgba(255, 255, 255, 0) 100%),url(images/shadr.png",
            }}></div>
          <div
            className="project"
            style={{
              backgroundImage:
                "linear-gradient(rgb(0 0 0 / 21%) 38%, rgba(255, 255, 255, 0) 100%),url(images/social.png",
            }}></div>
          <div
            className="project"
            style={{
              backgroundImage:
                "linear-gradient(rgb(0 0 0 / 21%) 38%, rgba(255, 255, 255, 0) 100%),url(images/art.png",
            }}></div>
        </Fade>
      </div>
    </div>
  );
}
