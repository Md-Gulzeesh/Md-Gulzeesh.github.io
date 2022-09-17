import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import {useEffect,useState} from "react";
import Skills from "./Components/Skills/Skills";
function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const mouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });
  // disable developer mode
  // document.onkeydown = function (e) {
  //   if (e.keyCode == 123) {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
  //     return false;
  //   }
  // };

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
      document.title = "Md Gulzeesh Portfolio";
      window.addEventListener("mousemove", mouseMove);
    } else {
      document.title = "Please Come Back I'm Waiting...";
      window.removeEventListener("mousemove", mouseMove);
    }
  });
  return (
    <div className="App">
      <Home />
      <About />
      <Skills/>
      <Projects />
      <Navbar />
      <div
        className="cursor"
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      ></div>
      
    </div>
  );
}

export default App;
