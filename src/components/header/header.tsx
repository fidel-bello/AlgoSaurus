import React, { useState } from "react";
import { Link } from "react-router-dom";
import dino from "../dino.gif";
import styles from "./header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "./mobileMenu/mobileMenu";

const Header = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        handleClose={() => setIsMobileMenuOpen(false)}
      />
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
            <span className={styles.menuHeader}>Visualizer</span>
          </Link>
          <Link to="/about" className={styles.menuItems}>
            <span className={styles.menuHeader}>About</span>
          </Link>
          <Link to="/contact" className={styles.menuItems}>
            <span className={styles.menuHeader}>Contact</span>
          </Link>
        </div>
        <div className={styles.menuItemDivMobile}>
          <GiHamburgerMenu
            onClick={() => setIsMobileMenuOpen(true)}
            className={styles.mobile_icon}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
