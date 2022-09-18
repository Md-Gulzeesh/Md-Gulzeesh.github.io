import React from "react";
import { AiFillGithub } from "react-icons/ai";
import Button from "../Button/Button";
import "./ProjectCard.css";
const ProjectCard = ({
  ProjectImg,
  title,
  description,
  type,
  features,
  github_repo,
  live_link,
  toolsData,
}) => {
  return (
    <div className="projectCard">
      <img src={ProjectImg} alt="" />
      <div className="projectDetails">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{type}</p>
        <p>{features}</p>
        <p>Tools Used:</p>
        <div className="toolsSection">
          {toolsData.map((elem) => (
            <span className="toolsBox">
              <img
                style={{ width: "20px" }}
                src={elem.toolImg}
                alt={elem.toolName}
                className="icon"
              />
              <span className="toolText">{elem.toolName}</span>
            </span>
          ))}
        </div>
        <div className="projectButtons">
          <a style={{ textDecoration: "none" }} href={github_repo}>
            <Button className="outline_btn">
              Github
              <AiFillGithub style={{ marginLeft: "5px" }} />
            </Button>
          </a>
          <a style={{ textDecoration: "none" }} href={live_link}>
            <Button>Live</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
