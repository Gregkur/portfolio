import { React, useState } from "react";

import Fade from "react-reveal/Fade";

export default function SingleProject(props) {
  const [hideInfo, setHideInfo] = useState("hide");
  const { modal, changeModal, title, stack, photo } = props;

  const handleEnter = (e) => {
    setHideInfo("");
  };

  const handleLeave = (e) => {
    setHideInfo("hide");
  };

  const handleClick = (e) => {
    changeModal(modal);
  };
  
  return (
    <div
      onMouseOver={handleEnter}
      onMouseLeave={handleLeave}
      className="project"
      style={{
        backgroundImage: `linear-gradient(rgb(0 0 0 / 21%) 38%, rgba(255, 255, 255, 0) 100%),url(images/${photo}`,
      }}>
      <div className={`infoContainer ${hideInfo}`}>
        <Fade top duration={300} distance={"50%"}>
          <div className="infoContainerText">
            <h2>{title}</h2>
            <h3>{stack}</h3>
          </div>
        </Fade>
        <Fade bottom duration={300} delay={100}>
          <button className="buttonGold" onClick={handleClick}>
            View Project
          </button>
        </Fade>
      </div>
    </div>
  );
}
