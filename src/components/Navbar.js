import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const navbarItems = ["Home", "About", "Skills", "Projecs", "Contact", "CV"];
  const mappedNavbarItems = navbarItems.map((item) => (
    <p className="menuItem">{item}</p>
  ));
  return (
    <div className="nav">
      <span className="menuContainer">{mappedNavbarItems}</span>
    </div>
  );
}
