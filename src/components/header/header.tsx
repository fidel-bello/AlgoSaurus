import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import dino from "../dino.gif";
import styles from "./header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "./mobileMenu/mobileMenu";

const Header = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [ isHidden, setIsHidden ] = useState<boolean>(false);
  const location = useLocation();

  const handleHidden = (state: boolean): void => {
    setIsHidden(state)
  }


  useEffect(() => {
  if (location.pathname === "/algorithm-visualizer") handleHidden(false);
  else handleHidden(true);
  }, [location.pathname]);

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
        <div className={styles.menuItems}>
          <Link to="/path-finding" className={styles.menuItems} style={ isHidden ? { display: "none"}: { display: "block"} }>
            <span className={styles.menuHeader}>Path Finding</span>
          </Link>
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
