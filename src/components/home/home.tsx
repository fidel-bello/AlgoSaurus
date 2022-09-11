import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
const home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.heroHeader}>
          Algorithm <span>Visualizer</span>!
        </h1>
        <p className={styles.heroPara}>
          A tool for explaining concept of sorting algorithms in computing.
        </p>
        <br></br>
        <Link to="/algorithm-visualizer">
          <button className={styles.heroButton}>Learn More</button>
        </Link>
      </div>
      <div className={styles.animationArea}>
        <ul className={styles.boxArea}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default home;
