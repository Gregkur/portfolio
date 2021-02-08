import React from "react";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <h1 className="projectsTitle">PROJECTS</h1>
      <div className="grid-container">
        <div style={{ backgroundColor: "purple" }}></div>
        <div style={{ backgroundColor: "red" }}></div>
        <div style={{ backgroundColor: "pink" }}></div>
        <div style={{ backgroundColor: "orange" }}></div>
      </div>
    </div>
  );
}
