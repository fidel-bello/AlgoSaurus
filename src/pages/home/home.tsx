import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import { motion } from "framer-motion";

const home = () => {
  const container = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 200,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, y: 100 },
  };

  return (
    <div className={styles.container}>
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className={styles.hero}
      >
        <motion.h1 variants={item} className={styles.heroHeader}>
          Algorithm Visualizer!
        </motion.h1>
        <motion.p variants={item} className={styles.heroPara}>
          A tool for explaining concept of sorting algorithms in computing.
        </motion.p>
        <br></br>
        <motion.div variants={item}>
          <Link to="/algorithm-visualizer">
            <button className={styles.heroButton}>Learn More</button>
          </Link>
        </motion.div>
      </motion.div>
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
