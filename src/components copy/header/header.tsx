import React from "react";
import styles from "./header.module.css";

const Header = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Algorithm Visualization</h1>
      </div>
    </div>
  );
};

export default Header;
