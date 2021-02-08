import React from "react";
import Particles from "react-particles-js";
import { particleParams } from "../particles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <Particles width="100vw" height="100vh" params={particleParams} />
      <div className="textContainer">
        <h1>
          Hey there! I’m <span className="greg">Greg</span> <br />I'm a front-end
          developer from Berlin.
        </h1>
        <FontAwesomeIcon className="arrowDown" icon={faChevronCircleDown} />
      </div>
    </div>
  );
}
