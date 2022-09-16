import React from 'react'
import "./Project.css";
import {AiFillGithub} from "react-icons/ai";
import ProjectCard from './ProjectCard';
const Projects = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="project">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </section>
  );
}

export default Projects