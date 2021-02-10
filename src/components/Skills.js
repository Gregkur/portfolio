import React from "react";
import "../styles/Skills.css";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "SASS",
    "Javascript",
    "Bootstrap",
    "Ruby",
    "Rails",
    "ReactJS",
    "PostgreSQL",
    "Figma",
    "GIT",
    "Teamwork",
  ];
  const mappedSkills = skills.map((skill) => (
    <div className="singleSkill">{skill}</div>
  ));
  return (
    <div className="skills">
      <h1 className="skillsTitle">SKILLS</h1>
      <div className="skillsRectangle">
        {/* <div className="="> */}
          {mappedSkills}
          {/* </div> */}
      </div>
    </div>
  );
}
