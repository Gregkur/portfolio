import React from "react";
import Fade from "react-reveal/Fade";
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
      <Fade left duration={1200} delay={200}>
        <h1 className="skillsTitle">SKILLS</h1>
      </Fade>
      <div className="skillsRectangle">
        <div className="skillsContainer">
          <Fade left big duration={2000}>
            <div className="technicalRectangle">
              <h3>Technical</h3>
            </div>
          </Fade>
          {/* <Fade top big>
            <div className="singleSkill">React</div>
            <div className="singleSkill">Javascript</div>
            <div className="singleSkill">HTML</div>
            <div className="singleSkill">CSS</div>
            <div className="singleSkill">Ruby</div>
            <div className="singleSkill">Rails</div>
            <div className="singleSkill">PostgreSQL</div>
            <div className="singleSkill">Figma</div>
          </Fade> */}
        </div>
        <div className="skillsContainer">
          <Fade right big duration={2000} delay={300}>
            <div className="technicalRectangle">
              <h3>Soft</h3>
            </div>
          </Fade>
          {/* <Fade top big>
            <div className="singleSkill">React</div>
            <div className="singleSkill">Javascript</div>
            <div className="singleSkill">HTML</div>
            <div className="singleSkill">CSS</div>
            <div className="singleSkill">Ruby</div>
            <div className="singleSkill">Rails</div>
            <div className="singleSkill">PostgreSQL</div>
            <div className="singleSkill">Figma</div>
          </Fade> */}
        </div>
      </div>
    </div>
  );
}
