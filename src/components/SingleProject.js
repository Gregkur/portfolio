import { React, useState } from "react";
import Fade from "react-reveal/Fade";

export default function SingleProject(props) {
  const [hideInfo, setHideInfo] = useState("hide");
  const { title, stack, photo } = props;

  const handleEnter = (e) => {
    setHideInfo("");
    // console.log(e.target.firstChild);
    // e.target.firstChild.classList.add("slideDown");
  };
  const handleLeave = (e) => {
    setHideInfo("hide");
  };
  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="project"
      style={{
        backgroundImage: `linear-gradient(rgb(0 0 0 / 21%) 38%, rgba(255, 255, 255, 0) 100%),url(images/${photo}`,
      }}>
      <div className={`infoContainer ${hideInfo}`}>
        <Fade top duration={500} distance={"40%"}>
          <div className="infoContainerText">
            <h2>{title}</h2>
            <h3>{stack}</h3>
          </div>
        </Fade>
        <Fade bottom duration={500} delay={200}>
          <button>View Project</button>
        </Fade>
      </div>
    </div>
  );
}
