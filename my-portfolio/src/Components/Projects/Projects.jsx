import React from 'react'
import "./Project.css";
import ProjectCard from './ProjectCard';
const Projects = () => {
  return (
    <section id="project">
      <h4 className="projectHeading">My Work</h4>
      <h1 className="projectHeading">Projects</h1>
      <hr />
      <div className="projectCardDiv">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}

export default Projects