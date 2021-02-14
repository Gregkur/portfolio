import React from "react";

import Reveal from "react-reveal/Reveal";

export default function SingleSkill(props) {
  const { name, percentage, delay } = props;
  return (
    <div className="skill">
      <h5>{name}</h5>
      <p>{percentage}</p>
      <Reveal effect={`grow${percentage.slice(0, -1)}`} delay={delay}>
        <div className="rectangle "></div>
      </Reveal>
    </div>
  );
}
