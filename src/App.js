import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Particles from "react-particles-js";
import { particleParams } from "./particles";
function App() {
  return (
    <>
      <Particles
        className="particlesBackground"
        width="100vw"
        height="1000vh"
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
