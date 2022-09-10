import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link to="/">
          <h1>Algorithm Visualization</h1>
        </Link>
        <div className={styles.menuItems}>
          <Link to="/algorithm-visualizer">
            <h1>Visualizer</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
