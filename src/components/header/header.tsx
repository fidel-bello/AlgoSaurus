import React from "react";
import { Link } from "react-router-dom";
import dino from "../dino.gif";
import styles from "./header.module.css";
const Header = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link to="/">
          <div className={styles.logo}>
            <h1>Algo</h1>
            <img src={dino} alt="" className={styles.dino} />
            <h1>Saurus</h1>
          </div>
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
