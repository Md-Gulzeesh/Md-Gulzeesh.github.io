import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import Button from '../Button/Button';
import "./ProjectCard.css";
import ProjectImg from "../../Assets/ProjectImages/LiciousImg.PNG";
const ProjectCard = () => {
  return (
    <div className="projectCard">
      <div className="projectImage">
        <img src={ProjectImg} alt="" />
      </div>
      <div className="projectDetails">
        <h2>Licious.in Clone</h2>
        <p>
          Licious is an online fresh meat Ordering shop. It provides all non-
          vegetarian food.
        </p>
        <p>It was Individual Project executed in 5 days.</p>
        <p>Major features are location handling ,Authentication.</p>
        <p>Tools Used:</p>
        <div className="projectButtons">
          <Button className="outline_btn">Github</Button>
          <Button>Live</Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard