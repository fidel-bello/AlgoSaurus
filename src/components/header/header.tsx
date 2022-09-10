import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Algorithm Visualization</h1>
        <div className={styles.menuItems}>
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="/algorithm-visualizer">
            <h2>Algorithm Visualizer</h2>
          </Link>
          <Link to="/pathfinder">
            <h2>Pathfinder</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
