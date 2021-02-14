import React from "react";

import Reveal from "react-reveal/Reveal";

const smartphone = window.matchMedia(
  "(min-device-width: 320px) and (max-device-width: 650px)"
);


export default function SingleSkill(props) {
  const { name, percentage, delay } = props;
  return (
    <div className="skill">
      <h5>{name}</h5>
      <p>{percentage}</p>
      <Reveal
        effect={
          smartphone.matches
            ? `smartphoneGrow${percentage.slice(0, -1)}`
            : `grow${percentage.slice(0, -1)}`
        }
        delay={delay}>
        <div className="rectangle "></div>
      </Reveal>
    </div>
  );
}
