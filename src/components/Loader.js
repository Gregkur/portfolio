import React from "react";
import "../styles/Loader.css";

export default function Loader() {
  return (
    <div className="loaderBackground slide-bottom">
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
      </div>
    </div>
  );
}
