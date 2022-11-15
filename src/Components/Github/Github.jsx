import React, { useContext } from 'react';
import { ScrollContext } from '../../Context/ScrollContext';
import styles from "./Github.module.css";
import GitHubCalendar from "react-github-calendar";
import GithubStats from './GithubStats';

const Github = () => {
    const {  github } =
      useContext(ScrollContext);
  return (
    <section ref={github} id={styles.github}>
        {/* <h4 className={styles.github_heading}>Get To Know</h4> */}
        <h1 className={styles.github_heading}>My Github</h1>
        <hr />
        <a
          href="https://github.com/Md-Gulzeesh"
          target="_blank"
          rel="noreferrer"
          style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
        >
          <GitHubCalendar
            blockMargin={5}
            blockSize={15}
            fontSize={16}
            username="Md-Gulzeesh"
            style={{ margin: "20px auto" }}
          />
        </a>
        <GithubStats />
    </section>
  );
}

export default Github