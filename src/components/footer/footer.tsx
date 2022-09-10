import React from "react";
import dino from "../dino.gif";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <img src={dino} alt="" className={styles.dino} />
      <h2>AlgoSaurus</h2>
      <p>The power of the AlgoSaurus will help you understand algorithms!</p>
    </div>
  );
};

export default Footer;
