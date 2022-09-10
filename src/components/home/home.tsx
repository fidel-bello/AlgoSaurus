import React from "react";
import { Link } from "react-router-dom";
import algoPic from "../algoPic.png";
import styles from "./home.module.css";
const home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Algorithm Visualizer</h1>
        <h1>A tool for explaining.</h1>
        <p>Grasping the concept of algorithms is hard,</p>
        <p>let us help.</p>
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
      <div className={styles.section2}>
        <h1>Our Tools</h1>
        <div className={styles.flex}>
          <div className={styles.project}>
            <img src={algoPic} alt="" className={styles.projectImg} />
            <div className={styles.projectInfo}>
              <h2>Algorithm Visualization</h2>
              <Link to="/algorithm-visualizer">
                <button>Explore</button>
              </Link>
            </div>
          </div>
          <div className={styles.project}>
            <img src={algoPic} alt="" className={styles.projectImg} />
            <div className={styles.projectInfo}>
              <h2>Pathfinder</h2>
              <Link to="/pathfinder">
                <button>Explore</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
