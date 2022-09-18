import React from 'react'
import "./Contact.css";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
      <h4 className="contact_heading">Let's Connect</h4>
      <h1 className="contact_heading">Contact</h1>
      <hr />
      <div className="contact_info">
        <h2>
          One-click away from not being a{" "}
          <span style={{ color: "#ffc234" }}>Stranger</span>
        </h2>
        <div className="contact_options">
          <a href="mailto: gulzeesh2000@gmail.com">
            <div className="contact_card">
              <AiOutlineMail className="contact_icons" />
              <span>Email</span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/gulzeesh/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact_card">
              <AiFillLinkedin className="contact_icons" />
              <span>Linkedin</span>
            </div>
          </a>
          <a
            href="https://github.com/Md-Gulzeesh"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact_card">
              <AiFillGithub className="contact_icons" />
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