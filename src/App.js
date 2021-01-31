import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <About />
      <Skills />
    </div>
  );
}

export default App;
