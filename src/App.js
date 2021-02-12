import { React, useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import Particles from "react-particles-js";
import { particleParams } from "./particles";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.add("noScroll");
    setTimeout(() => {
      body.classList.remove("noScroll");
      setLoading(false);
    }, 2600);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Particles
        className="particlesBackground"
        width="100vw"
        height="500vh"
        params={particleParams}
      />
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
