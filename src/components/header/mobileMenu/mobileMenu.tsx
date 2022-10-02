import React from "react";
import styles from "./mobileMenu.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

import { FaSortAmountUpAlt } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const MobileMenu = ({ isOpen, handleClose }: Props) => {
  return (
    <div className={styles.container}>
      <div
        onClick={handleClose}
        className={isOpen ? styles.backdrop_on : styles.backdrop_off}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "105%" }}
            transition={{ duration: 0.5, type: "spring" }}
            className={styles.menu}
          >
            <div className={styles.menu_header}>
              <img className={styles.dino} src="/dino.gif" />
              <button
                onClick={handleClose}
                className={styles.close_icon_button}
              >
                <AiOutlineClose color="white" className={styles.close_icon} />
              </button>
            </div>
            <ul className={styles.menu_list}>
              <li>
                <Link
                  onClick={handleClose}
                  to="/algorithm-visualizer"
                  className={styles.menu_item}
                >
                  <FaSortAmountUpAlt className={styles.visualizer_icon} />
                  <span className={styles.menuHeader}>VISUALIZER</span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClose}
                  to="/about"
                  className={styles.menu_item}
                >
                  <RiTeamFill className={styles.menu_item_icon} />
                  <span className={styles.menuHeader}>ABOUT</span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClose}
                  to="/contact"
                  className={styles.menu_item}
                >
                  <MdOutlineMailOutline className={styles.menu_item_icon} />
                  <span className={styles.menuHeader}>CONTACT</span>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
