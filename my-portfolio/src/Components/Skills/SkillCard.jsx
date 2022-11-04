import React from "react";
import styles from "./Skills.module.css";
const SkillCard = ({img_url,title}) => {
  return (
    <div className={styles.skillCard}>
      <div className={styles.skillCardImageDiv}>
        <img src={img_url} alt={title} className={styles.skillCardImg} loading="lazy" />
      </div>
      <h4>
        <b>
          <i>{title}</i>
        </b>
      </h4>
    </div>
  );
};

export default SkillCard;
