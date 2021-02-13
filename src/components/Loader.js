import React from "react";
import "../styles/Loader.css";

export default function Loader() {
  return (
    <div className="loaderBackground slide-bottom">
      <div class="sk-folding-cube">
        <div class="sk-cube1 sk-cube"></div>
        <div class="sk-cube2 sk-cube"></div>
        <div class="sk-cube4 sk-cube"></div>
        <div class="sk-cube3 sk-cube"></div>
      </div>
    </div>
  );
}
