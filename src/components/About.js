import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about content">
      <h1 className="aboutTitle">ABOUT</h1>
      <div className="aboutContainer">
        <p className="aboutText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          justo orci, sollicitudin iaculis dignissim at, lacinia vel tellus. Nam
          ac ex bibendum, pulvinar ligula at, tempor sem. Phasellus a
          ullamcorper mauris. Pellentesque eu scelerisque libero. Nunc ac lectus
          hendrerit, vehicula ipsum ac, tristique est. Phasellus tempor enim
          fringilla convallis hendrerit. Cras lorem leo, pretium in fermentum
          ac, ullamcorper eget ipsum. Quisque at maximus est, sollicitudin
          malesuada ex. Ut hendrerit dignissim tortor sit amet porta.
          Pellentesque varius imperdiet mattis. Aenean condimentum est luctus
          nisi tempor luctus. Nunc ultrices luctus nunc eget facilisis. Fusce
          semper condimentum mi, nec aliquam eros ullamcorper a. Suspendisse
          porttitor mattis tristique. Sed nec volutpat massa.
        </p>
        <img className="profilePhoto" src="images/profile.jpg" alt="profile" />
      </div>
    </div>
  );
}
