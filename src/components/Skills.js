import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Reveal from "react-reveal/Reveal";
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
        <div className="skillsContainer skillsGrid">
          <Slide left duration={1000}>
            <div className="skill">
              <h5>HTML</h5>
              <Reveal effect="grow90" delay={1000}>
                <div className="rectangle "></div>
              </Reveal>
            </div>
            <div className="skill">
              <h5>CSS</h5>
              <Reveal effect="grow90" delay={1100}>
                <div className="rectangle "></div>
              </Reveal>
            </div>
            <div className="skill">
              <h5>JavaScript</h5>
              <Reveal effect="grow70" delay={1200}>
                <div className="rectangle "></div>
              </Reveal>
            </div>
            <div className="skill">
              <h5>React</h5>
              <Reveal effect="grow60" delay={1300}>
                <div className="rectangle"></div>
              </Reveal>
              {/* <div className="rectangleLight"></div> */}
            </div>
            <div className="skill">
              <h5>Ruby/Rails</h5>
              <Reveal effect="grow60" delay={1400}>
                <div className="rectangle"></div>
              </Reveal>
            </div>
            <div className="skill">
              <h5>SQL</h5>
              <Reveal effect="grow40" delay={1500}>
                <div className="rectangle"></div>
              </Reveal>
            </div>
            <div className="skill">
              <h5>Node</h5>
              <Reveal effect="grow30" delay={1500}>
                <div className="rectangle"></div>
              </Reveal>
            </div>
            <div className="skill">
              <h5>Figma</h5>
              <Reveal effect="grow50" delay={1500}>
                <div className="rectangle"></div>
              </Reveal>
            </div>
            <div className="skill">
              <h5>NextJS</h5>
              <Reveal effect="grow40" delay={1500}>
                <div className="rectangle"></div>
              </Reveal>
            </div>
            <div className="skill">
              <h5>Webpack</h5>
              <Reveal effect="grow30" delay={1500}>
                <div className="rectangle"></div>
              </Reveal>
            </div>
          </Slide>
          {/* <div className="technicalRectangle">
            <Fade duration={2000}>
              <h3>Technical</h3>
            </Fade>
            <Slide left delay={100} duration={1600}>
              <div className="singleSkill react">React</div>
            </Slide>
            <Slide left big delay={800} duration={2000}>
              <div className="singleSkill js">Javascript</div>
            </Slide>
            <Slide left big delay={900} duration={2000}>
              <div className="singleSkill xhtml">HTML</div>
            </Slide>
            <Slide left big delay={100} duration={2000}>
              <div className="singleSkill css">CSS</div>
            </Slide>
            <Slide left big delay={1100} duration={2000}>
              <div className="singleSkill ruby">Ruby</div>
            </Slide>
            <Slide left big delay={1200} duration={2000}>
              <div className="singleSkill rails">Rails</div>
            </Slide>
            <Slide left big delay={1300} duration={2000}>
              <div className="singleSkill postreSQL">PostgreSQL</div>
            </Slide>
            <Slide left big delay={1400} duration={1700}>
              <div className="singleSkill figma">Figma</div>
            </Slide>
          </div> */}
        </div>
        {/* <div className="skillsContainer"> */}
        {/* <Fade right big duration={2000} delay={300}> */}
        {/* <div className="technicalRectangle">
            <Fade duration={2000} delay={300}>
              <h3>Soft</h3>
            </Fade>
          </div> */}
        {/* </Fade> */}
        {/* </div> */}
      </div>
    </div>
  );
}
