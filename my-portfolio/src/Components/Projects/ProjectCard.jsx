import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import "./ProjectCard.css";
const ProjectCard = () => {
  return (
    <article className="projectCard">
      <div className="projectCard-image">
        <img
          src="https://dev-hardik.netlify.app/assets/img/project3.png"
          alt=""
        />
      </div>
      <div>
        <h3>LICIOUS.IN CLONE</h3>
        <div className="projectDetails">
          <p>
            Licious is an online fresh meat Ordering shop. It provides all non-
            vegetarian food.
          </p>
          <ul>
            <li>Individual Project executed within 5 days.</li>
            <li>
              Features : <br />
              <li>login, signup, carousel, cart. </li>
            </li>
          </ul>
        </div>
      </div>
      <a
        href="https://github.com"
        className="btn"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Github{" "}
        <span>
          <AiFillGithub />
        </span>
      </a>
      <a
        href="https://dribbble.com/Alien_pixels"
        className="btn btn-primary"
        target="_blank"
      >
        {" "}
        Live Demo{" "}
      </a>
    </article>
  );
}

export default ProjectCard