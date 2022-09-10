import React from "react";
import styles from "./header.module.css";

const Header = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Algorithm Visualization</h1>
        <div className={styles.menuItems}>
          <a href="/">
            <h2>Home</h2>
          </a>
          <a href="/algorithm-visualizer">
            <h2>Algorithm Visualizer</h2>
          </a>
          <a href="/pathfinder">
            <h2>Pathfinder</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
