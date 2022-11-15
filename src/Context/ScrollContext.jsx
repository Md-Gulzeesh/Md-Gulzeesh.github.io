import React, { useRef } from "react";
import { createContext } from "react";

export const ScrollContext = createContext();

export default function ScrollContextProvider({ children }) {
  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const github = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <ScrollContext.Provider
      value={{ scrollToSection, home, about, skills, github, project, contact }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
