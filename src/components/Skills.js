import React from "react";

import SingleSkill from "./SingleSkill";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import { skills } from "../scripts/skills";
import "../styles/Skills.css";

export default function Skills() {
  const mappedSkills = skills.map((skill) => (
    <SingleSkill
      key={skill[0]}
      name={skill[0]}
      percentage={skill[1]}
      delay={skill[2]}
    />
  ));

  return (
    <section className="skills">
      <Fade left duration={1200} delay={100} fraction={0.8}>
        <h1 className="skillsTitle">SKILLS</h1>
      </Fade>
      <div className="skillsRectangle">
        <div className="skillsContainer skillsGrid">
          <Slide left big duration={1000} fraction={0.8}>
            {mappedSkills}
          </Slide>
        </div>
      </div>
    </section>
  );
}
