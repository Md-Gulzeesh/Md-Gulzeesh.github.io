import React from "react";
import styles from "./About.module.css";
import { useContext } from "react";
import { ScrollContext } from "../../Context/ScrollContext";
// import My_Image from "../../Assets/Profile_Image/Profile_2.jpg"

const About = () => {
  const { about } = useContext(ScrollContext);
  return (
    <section ref={about} id={styles.about}>
      {/* <h4 className={styles.about_heading}>Get To Know</h4> */}
      <h1 className={styles.about_heading}>About Me</h1>
      <hr />
      <div className={styles.about_container}>
        {/* <div className={styles.about_img}>
            <img src={My_Image} alt="Profile" className={styles.about_img} />
          </div> */}
        <div className={styles.about_details}>
          <h2>
            I'm <span style={{ color: "#7562e0" }}>Md Gulzeesh</span>
          </h2>
          <p className={styles.summary}>
            A Passionate Full Stack Web Developer. Capable of writing productive
            code using MERN stacks. Collaborative, team player who is proficient
            in working with teams and executing goal-oriented projects.
            Interested to work in the company to enhance product experience and
            gain knowledge.
          </p>
          <p>
            Let's Connect @
            <a className={styles.email} href="mailto: gulzeesh2000@gmail.com">
              {" "}
              gulzeesh2000@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className={styles.drop_bottom}></div>
    </section>
  );
};

export default About;
