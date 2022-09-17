import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { FaToolbox } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        {" "}
        <AiOutlineHome />{" "}
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <FaToolbox />
      </a>
      <a
        href="#project"
        onClick={() => setActiveNav("#project")}
        className={activeNav === "#project" ? "active" : ""}
      >
        <BiBook />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navbar;
