import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
function App() {
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
      document.title = "Md Gulzeesh Portfolio";
    } else {
      document.title = "Please Come Back I'm Waiting...";
    }
  });
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Navbar />
    </div>
  );
}

export default App;
