import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Particles from "react-particles-js";
import { particleParams } from "./particles";
import { useEffect } from "react";
import { stickyNavbar } from "./scripts/stickyNavbar";
function App() {
  // useEffect(() => {
  //   console.log(1)
  //   console.log(stickyNavbar())
  // })

  return (
    <>
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
