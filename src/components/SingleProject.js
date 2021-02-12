import { React, useState } from "react";

export default function SingleProject(props) {
  const [infoShowing, setinfoShowing] = useState(false);
  const { title, stack, photo } = props;

  const handleEnter = (e) => {
    setinfoShowing(true);
    console.log(e.target);
  };
  const handleLeave = () => {
    setinfoShowing(false);
  };
  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="project"
      style={{
        backgroundImage: `linear-gradient(rgb(0 0 0 / 21%) 38%, rgba(255, 255, 255, 0) 100%),url(images/${photo}`,
      }}>
      <div className={`infoContainer ${!infoShowing && `hide`}`}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <button>View Project</button>
      </div>
    </div>
  );
}
