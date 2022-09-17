import React from "react";
import "./About.css";
import My_Image from "../../Assets/Profile_Image/linkedin-photo.jpeg";
const About = () => {
  return (
    <section id="about">
      <h4 className="about_heading">Get To Know</h4>
      <h1 className="about_heading">About Me</h1>
      <hr />
      <div className="about_container">
        <div className="about_img">
          <img src={My_Image} alt="Profile" className="about_img" />
        </div>
        <div className="about_details">
          <h2>
            I'm <span>Md Gulzeesh</span>
          </h2>
          <p className="summary">
            A Passionate Full Stack Web Developer. Capable of writing productive
            code using MERN stacks. Collaborative, team player who is proficient
            in working with teams and executing goal-oriented projects.
            Interested to work in the company to enhance product experience and
            gain knowledge.
          </p>
          <p>
            Let's Connect @
            <a className="email" href="mailto: gulzeesh2000@gmail.com"> gulzeesh2000@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
