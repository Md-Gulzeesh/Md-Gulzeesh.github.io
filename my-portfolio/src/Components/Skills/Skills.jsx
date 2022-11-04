import React, { useContext } from "react";
import SkillCard from "./SkillCard";
import styles from "./Skills.module.css";
import HTML from "../../Assets/Skills_logo/HTML.svg";
import Bootstrap from "../../Assets/Skills_logo/Bootstrap_logo.png";
import Chankra_Ui from "../../Assets/Skills_logo/Chakra_Ui.png";
import CSS from "../../Assets/Skills_logo/CSS.webp";
import Express from "../../Assets/Skills_logo/express.png";
import Github from "../../Assets/Skills_logo/GitHub.png";
import JavaScript from "../../Assets/Skills_logo/JavaScript.svg";
import Json_Server from "../../Assets/Skills_logo/json_server.png";
import MongoDb from "../../Assets/Skills_logo/MongoDb.webp";
import Node_Js from "../../Assets/Skills_logo/Node_js.png";
import React_Js from "../../Assets/Skills_logo/React_js.png";
import React_Router from "../../Assets/Skills_logo/React_Router.png";
import Redux from "../../Assets/Skills_logo/Redux.png";
import { ScrollContext } from "../../Context/ScrollContext";

const Skills = () => {
  const skillData = [
    {
      id: 1,
      title: "HTML",
      img_url: HTML,
    },
    {
      id: 2,
      title: "CSS",
      img_url: CSS,
    },
    {
      id: 3,
      title: "JavaScript",
      img_url: JavaScript,
    },
    {
      id: 4,
      title: "React Js",
      img_url: React_Js,
    },
    {
      id: 5,
      title: "BootStrap",
      img_url: Bootstrap,
    },
    {
      id: 6,
      title: "Chakra Ui",
      img_url: Chankra_Ui,
    },
    {
      id: 7,
      title: "Express",
      img_url: Express,
    },
    {
      id: 8,
      title: "Json Server",
      img_url: Json_Server,
    },
    {
      id: 9,
      title: "MongoDb",
      img_url: MongoDb,
    },
    {
      id: 10,
      title: "Node Js",
      img_url: Node_Js,
    },
    {
      id: 11,
      title: "Redux",
      img_url: Redux,
    },
    {
      id: 12,
      title: "React Router",
      img_url: React_Router,
    },
    {
      id: 13,
      title: "GitHub",
      img_url: Github,
    },
  ];
  const { skills } = useContext(ScrollContext);
  return (
    <section ref={skills} id={styles.skills}>
        <h4 className={styles.skills_heading}>Get To Know</h4>
        <h1 className={styles.skills_heading}>My Skills</h1>
        <hr />
        <div className={styles.skillcard_div}>
          {skillData.map((elem) => (
            <SkillCard
              key={elem.id}
              title={elem.title}
              img_url={elem.img_url}
            />
          ))}
        </div>
    </section>
  );
};

export default Skills;
