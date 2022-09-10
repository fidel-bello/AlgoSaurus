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
            <h1>Home</h1>
          </Link>
          <Link to="/algorithm-visualizer">
            <h1>Algorithm Visualizer</h1>
          </Link>
          <Link to="/pathfinder">
            <h1>Pathfinder</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
