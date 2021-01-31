import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <About />
    </div>
  );
}

export default App;
