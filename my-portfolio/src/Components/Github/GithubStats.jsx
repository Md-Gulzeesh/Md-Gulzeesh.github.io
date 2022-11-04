import React from 'react';
import styles from "./Github.module.css";
const GithubStats = () => {
  return (
    <div className={styles.github_stats} >
      <a href="https://github.com/Md-Gulzeesh" target="_blank" rel='noreferrer' style={{cursor:"pointer"}}>
        <img
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com/?user=Md-Gulzeesh&theme=vision-friendly-dark"
          alt="githubstats"
          width="90%"
        />
      </a>
    </div>
  );
}

export default GithubStats