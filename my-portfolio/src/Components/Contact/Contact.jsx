import React, { useContext } from 'react'
import styles from "./Contact.module.css";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { ScrollContext } from '../../Context/ScrollContext';

const Contact = () => {
  const { contact } = useContext(ScrollContext);
  return (
    <section ref={contact} id={styles.contact}>
        <h4 className={styles.contact_heading}>Let's Connect</h4>
        <h1 className={styles.contact_heading}>Contact</h1>
        <hr />
      <div className={styles.contact_info}>
          <h2>
            One-click away from not being a{" "}
            <span style={{ color: "#ffc234" }}>Stranger</span>
          </h2>
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
      </div>
        <p>
          © 2022 Designed and Built by{" "}
          <span style={{ color: "#ffc234" }}>Md Gulzeesh</span> with ❤️
        </p>
    </section>
  );
}

export default Contact