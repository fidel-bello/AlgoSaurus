import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import dino from "../dino.gif";
import styles from "./header.module.css";
const Header = (): JSX.Element => {
  const [isMenuOn, setIsMenuOn] = useState(false);
  const handleMenu = () => {
    setIsMenuOn((prev) => !prev);
    console.log("click");
  };

  const headerAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <div>
      <motion.div className={styles.container} layout>
        <div className={styles.content}>
          <Link to="/">
            <div className={styles.logo}>
              <h1>Algo</h1>
              <img src={dino} alt="" className={styles.dino} />
              <h1>Saurus</h1>
            </div>
          </Link>
          <div className={styles.menuItemDiv}>
            <Link to="/algorithm-visualizer" className={styles.menuItems}>
              <h1 className={styles.menuHeader}>Visualizer</h1>
            </Link>
            <Link to="/contact" className={styles.menuItems}>
              <h1 className={styles.menuHeader}>Contact</h1>
            </Link>
            <div className="hamburgerIcon" onClick={handleMenu}>
              <FaBars className={styles.hamburgerIcon} />
            </div>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {isMenuOn && (
          <>
            <motion.div
              className={styles.dropMenu}
              initial="hidden"
              whileInView="visible"
              variants={headerAnimation}
              exit={{ opacity: 0 }}
            >
              <a href="/">
                <h2>Visualizer</h2>
              </a>
              <a href="/">
                <h2>Contact</h2>
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
