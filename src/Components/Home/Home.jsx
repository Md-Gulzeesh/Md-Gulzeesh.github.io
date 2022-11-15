import React, { useContext } from "react";
import styles from "./Home.module.css";
import Avatar from "../../Assets/Profile_Image/Profile_2.jpg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import TextTransition, { presets } from "react-text-transition";
import PATH from "../../Assets/Resume/Md_Gulzeesh_Resume.pdf";
import Button from "../Button/Button";
import { ScrollContext } from "../../Context/ScrollContext";

const TEXTS = [
  "MERN Developer",
  "Ready to Explore",
  "React Developer",
  "Enthusiastic",
];

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const { scrollToSection, contact, home } = useContext(ScrollContext);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <section ref={home} id={styles.home}>
      <div className={styles.details}>
        <h1 className={styles.intro}>
          Hi,
          <br />
          I'm Md <span className={styles.name}>Gulzeesh</span>
        </h1>
        <h1>
          <TextTransition direction="down" springConfig={presets.wobbly}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </h1>

        <div className={styles.call_section}>
          <a
            href={PATH}
            download="Md Gulzeesh Resume"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <Button className="outline_btn">Resume <HiDownload style={{marginLeft:"3px"}}/></Button>
          </a>
          <a
            href="#contact"
            onClick={() => scrollToSection(contact)}
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <Button>Let's Talk</Button>
          </a>
        </div>
        <div className={styles.social}>
          <a
            href="https://www.linkedin.com/in/gulzeesh/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin style={{ cursor: "pointer" }} />
          </a>
          <a
            href="https://github.com/Md-Gulzeesh"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub style={{ cursor: "pointer" }} />
          </a>
        </div>
      </div>
      <div>
        <img src={Avatar} alt="profile" className={styles.avatar}/>
      </div>
      <ul className={styles.square}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};

export default Home;
