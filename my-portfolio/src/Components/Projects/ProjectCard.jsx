import React from "react";
import { AiFillGithub } from "react-icons/ai";
import Button from "../Button/Button";
import styles from "./ProjectCard.module.css";
import Flip from "react-reveal/Flip";
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
    <Flip left cascade>
      <div className={styles.projectCard}>
        <img src={ProjectImg} alt="" />
        <div className={styles.projectDetails}>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{type}</p>
          <p>{features}</p>
          <p>Tools Used:</p>
          <div className={styles.toolsSection}>
            {toolsData.map((elem, index) => (
              <span key={index} className={styles.toolsBox}>
                <img
                  style={{ width: "20px" }}
                  src={elem.toolImg}
                  alt={elem.toolName}
                  className={styles.icon}
                />
                <span className={styles.toolText}>{elem.toolName}</span>
              </span>
            ))}
          </div>
          <div className={styles.projectButtons}>
            <a
              style={{ textDecoration: "none" }}
              href={github_repo}
              target="_blank"
              rel="noreferrer"
            >
              <Button className={styles.outline_btn}>
                Github
                <AiFillGithub style={{ marginLeft: "5px" }} />
              </Button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href={live_link}
              target="_blank"
              rel="noreferrer"
            >
              <Button>Live</Button>
            </a>
          </div>
        </div>
      </div>
    </Flip>
  );
};

export default ProjectCard;
