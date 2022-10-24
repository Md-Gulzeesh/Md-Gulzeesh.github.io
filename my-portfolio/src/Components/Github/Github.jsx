import React, { useContext } from 'react';
import { ScrollContext } from '../../Context/ScrollContext';
import styles from "./Github.module.css";
const Github = () => {
    const {  github } =
      useContext(ScrollContext);
  return (
    <section ref={github} id={styles["github"]}>
      <h4 className={styles.github_heading}>Get To Know</h4>
      <h1 className={styles.github_heading}>My Github</h1>
      <hr />
      
    </section>
  );
}

export default Github