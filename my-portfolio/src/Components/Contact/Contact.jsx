import React, { useContext } from 'react'
import styles from "./Contact.module.css";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { ScrollContext } from '../../Context/ScrollContext';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const Contact = () => {
  const { contact } =
    useContext(ScrollContext);
  return (
    <section ref={contact} id={styles["contact"]}>
      <Fade top cascade>
        <h4 className={styles.contact_heading}>Let's Connect</h4>
        <h1 className={styles.contact_heading}>Contact</h1>
        <hr />
      </Fade>
      <div className={styles.contact_info}>
        <Slide bottom cascade>
          <h2>
            One-click away from not being a{" "}
            <span style={{ color: "#ffc234" }}>Stranger</span>
          </h2>
        </Slide>
        <Slide top cascade>
          <div className={styles.contact_options}>
            <a href="mailto: gulzeesh2000@gmail.com">
              <div className={styles.contact_card}>
                <AiOutlineMail className={styles.contact_icons} />
                <span>Email</span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/gulzeesh/"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.contact_card}>
                <AiFillLinkedin className={styles.contact_icons} />
                <span>Linkedin</span>
              </div>
            </a>
            <a
              href="https://github.com/Md-Gulzeesh"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.contact_card}>
                <AiFillGithub className={styles.contact_icons} />
                <span>Github</span>
              </div>
            </a>
          </div>
        </Slide>
      </div>
      <Fade top cascade>
        <p>
          © 2022 Designed and Built by{" "}
          <span style={{ color: "#ffc234" }}>Md Gulzeesh</span> with ❤️
        </p>
      </Fade>
    </section>
  );
}

export default Contact