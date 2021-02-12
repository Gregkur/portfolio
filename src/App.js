import { React, useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import ModalConductor from "./components/ModalConstructor";
import Particles from "react-particles-js";
import { particleParams } from "./particles";

function App() {
  const [currentModal, setCurrentModal ]= useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.add("noScroll");
    setTimeout(() => {
      body.classList.remove("noScroll");
      setLoading(false);
    }, 2600);
  }, []);

  const changeModal = (modal) => {
    console.log('from main app')
    console.log(modal)
    setCurrentModal(modal)
  }

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
      <ModalConductor currentModal={currentModal} />
      <Projects changeModal={changeModal} />
      <Contact />
    </>
  );
}

export default App;
