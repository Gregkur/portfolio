import logo from "./logo.svg";
import Particles from "react-particles-js";
import { particleParams } from "./particles";
import "./App.css";

function App() {
  return (
    <>
      <Particles width="100vw" height="100vh" params={particleParams} />
      <h1>Hey there! I’m Greg A front-end developer from Berlin</h1>
    </>
  );
}

export default App;
