import React from "react";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <h1 className="projectsTitle">PROJECTS</h1>
      <div className="grid-container">
        <div
          className="project"
          style={{ backgroundImage: "url(images/portfolio.png" }}></div>
        <div
          className="project"
          style={{ backgroundImage: "url(images/shadr.png" }}></div>
        <div
          className="project"
          style={{ backgroundImage: "url(images/social.png" }}></div>
        <div
          className="project"
          style={{ backgroundImage: "url(images/art.png" }}></div>
      </div>
    </div>
  );
}
