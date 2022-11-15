import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillFolderOpen } from "react-icons/ai";
import { FaToolbox, FaGithub } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { useContext } from "react";
import { ScrollContext } from "../../Context/ScrollContext";
import styles from "./Navbar.module.css";
import { GetwidthContext } from "../../Context/GetwidthContext";

const NewNavbar = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [IsMobile, setIsMobile] = useState(false);
  const { scrollToSection, home, about, skills, github, project, contact } =
    useContext(ScrollContext);
  const { windowSize } = useContext(GetwidthContext);
  useEffect(() => {
    if (windowSize.innerWidth < 682) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowSize]);

  return IsMobile ? (
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
        <AiFillFolderOpen />
      </a>

      <a
        href="#contact"
        onClick={() => {
          setActiveNav("#contact");
          scrollToSection(contact);
        }}
        className={activeNav === "#contact" ? styles.active : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  ) : (
    <div className={styles.navbar}>
      <div>
        <img src="https://md-gulzeesh.github.io/favicon.ico" alt="logo" />
      </div>
      <div className={IsMobile ? styles.mobile : styles.desktop}>
        <a
          onClick={() => {
            scrollToSection(home);
          }}
          href="#home"
        >
          Home
        </a>
        <a
          onClick={() => {
            scrollToSection(about);
          }}
          href="#about"
        >
          About
        </a>
        <a
          onClick={() => {
            scrollToSection(skills);
          }}
          href="#skills"
        >
          Skills
        </a>
        <a
          onClick={() => {
            scrollToSection(github);
          }}
          href="#github"
        >
          Github
        </a>
        <a
          onClick={() => {
            scrollToSection(project);
          }}
          href="#project"
        >
          Projects
        </a>
        <a
          onClick={() => {
            scrollToSection(contact);
          }}
          href="#contact"
        >
          Contacts
        </a>
        <a
          href="https://drive.google.com/file/d/114HPcGl3BmwnLPyLmvcqyvHiwB-_qisM/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default NewNavbar;
