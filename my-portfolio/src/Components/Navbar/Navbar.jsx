import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { FaToolbox, FaGithub } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useContext } from "react";
import { ScrollContext } from "../../Context/ScrollContext";
import Slide from "react-reveal/Slide";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const { scrollToSection, home, about, skills, github, project, contact } = useContext(ScrollContext);
  return (
    <Slide bottom cascade>
      <nav>
        <a
          href="#home"
          onClick={() => {
            setActiveNav("#home");
            scrollToSection(home);
          }}
          className={activeNav === "#home" ? styles.active : ""}
        >
          {" "}
          <AiOutlineHome />{" "}
        </a>
        <a
          href="#about"
          onClick={() => {
            setActiveNav("#about");
            scrollToSection(about);
          }}
          className={activeNav === "#about" ? styles.active : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#skills"
          onClick={() => {
            setActiveNav("#skills");
            scrollToSection(skills);
          }}
          className={activeNav === "#skills" ? styles.active : ""}
        >
          <FaToolbox />
        </a>
        <a
          href="#github"
          onClick={() => {
            setActiveNav("#github");
            scrollToSection(github);
          }}
          className={activeNav === "#github" ? styles.active : ""}
        >
          <FaGithub />
        </a>
        <a
          href="#project"
          onClick={() => {
            setActiveNav("#project");
            scrollToSection(project);
          }}
          className={activeNav === "#project" ? styles.active : ""}
        >
          <BiBook />
        </a>

        <a
          href="#contact"
          onClick={() => {
            setActiveNav("#contact");
            scrollToSection(contact);
          }}
          className={activeNav === "#contact" ? styles.active : ""}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    </Slide>
  );
};

export default Navbar;
