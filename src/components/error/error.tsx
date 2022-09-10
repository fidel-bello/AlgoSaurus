import React from "react";
import styles from "./error.module.css";
const Error = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.h1}>404 Page Not Found</h1>
      </div>
    </div>
  );
};

export default Error;
