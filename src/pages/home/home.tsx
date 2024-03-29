import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import { motion, Variants } from "framer-motion";

// Particles background
import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFirePreset } from "tsparticles-preset-fire";

const home = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFirePreset(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  const container: Variants = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 20,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      y: 20,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Particles
        options={{ preset: "fire" }}
        init={particlesInit}
        loaded={particlesLoaded}
        className={styles.particles_background}
      />
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className={styles.hero}
        >
          <motion.h1 variants={item} className={styles.heroHeader}>
            Algorithm Visualizer
          </motion.h1>
          <motion.p variants={item} className={styles.heroPara}>
            A tool for explaining concept of sorting algorithms in computing.
          </motion.p>
          <br></br>
          <motion.div variants={item}>
            <Link to="/algorithm-visualizer">
              <button className={styles.heroButton}>Start Visualizing!</button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default home;
