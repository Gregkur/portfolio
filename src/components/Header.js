import React from "react";
import Particles from "react-particles-js";
import { particleParams } from "../particles";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="Header">
      <Particles width="100vw" height="100vh" params={particleParams} />
      <h1>
        Hey there! I’m <span className="greg">Greg</span> A front-end developer
        from Berlin
      </h1>
    </div>
  );
}
