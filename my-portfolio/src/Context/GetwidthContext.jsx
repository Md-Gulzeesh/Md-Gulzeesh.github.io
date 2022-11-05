import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const GetwidthContext = createContext();

export default function GetwidthContextProvider({ children }) {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <GetwidthContext.Provider value={{ windowSize }}>
      {children}
    </GetwidthContext.Provider>
  );
}
