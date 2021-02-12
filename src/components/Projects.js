import React from "react";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <h1 className="projectsTitle">PROJECTS</h1>
      <div className="grid-container">
        <div
          className="project"
          style={{
            backgroundImage:
              "linear-gradient(rgb(0 0 0 / 21%) 38%, rgba(255, 255, 255, 0) 100%),url(images/portfolio.png",
          }}></div>
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
      </div>
    </div>
  );
}
