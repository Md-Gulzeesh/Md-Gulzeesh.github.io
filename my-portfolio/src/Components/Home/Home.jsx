import React from "react";
import "./Home.css";
import Avatar from "../../Assets/Profile_Image/linkedin-photo.jpeg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import TextTransition, { presets } from "react-text-transition";
import PATH from "../../Assets/Resume/Md_Gulzeesh_Resume.pdf"
import Button from "../Button/Button";

const TEXTS = [
  "MERN Developer",
  "Ready to Explore",
  "React Developer",
  "Enthusiastic",
];


const Home = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <section id="home">
      <div className="details">
        <h1>
          Hi,
          <br />
          I'm Md <span className="name">Gulzeesh</span>
        </h1>
        <h1>
          <TextTransition direction="down" springConfig={presets.wobbly}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </h1>

        <div className="call_section">
          <a href={PATH} download="Md Gulzeesh Resume">
            {/* <button className="outline_btn">Resume</button> */}
            <Button className="outline_btn">Resume</Button>
          </a>
          <a href="##">
            {/* <button className="solid_btn">Let's Talk</button> */}
            <Button>Let's Talk</Button>
          </a>
        </div>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/gulzeesh/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/Md-Gulzeesh"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
      <div>
        <img src={Avatar} alt="profile" className="avatar" />
      </div>
      <ul className="circles">
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
