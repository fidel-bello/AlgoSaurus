import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
import styles from "./theTeam.module.css";

const TheTeam = () => {
  const [width, setWidth] = useState<number>(0);

  React.useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>The Team!</h2>
      <Splide
        options={
          width < 900
            ? {
                gap: "20px",
                perMove: 1,
                perPage: 1,
              }
            : {
                gap: "20px",
                perMove: 1,
                perPage: 3,
              }
        }
        className={styles.swiper}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <div className={styles.person_card}>
            <img
              className={styles.slide_image}
              alt="Fidel Bello Dev"
              src="/team/fidel.png"
            />
            <h2>Fidel Bello</h2>
            <p>Algorithms Master</p>
            <ul className={styles.about_list}>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/fidel-bello"
                  rel="noreferrer"
                >
                  GitHub: fidel-bello
                </a>
              </li>
              <li>
                <a href="mailto:">email@email.com</a>
              </li>
            </ul>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.person_card}>
            <img
              className={styles.slide_image}
              alt="Anthony Fernandez Dev"
              src="/team/fidel.png"
            />
            <h2>Anthony Fernandez</h2>
            <p>Frontend Dev</p>
            <ul className={styles.about_list}>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/anthony-fdez"
                  rel="noreferrer"
                >
                  GitHub: anthony-fdez
                </a>
              </li>
              <li>
                <a href="mailto:anthonyfdez23@gmail.com">
                  anthonyfdez23@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.person_card}>
            <img
              className={styles.slide_image}
              alt="Alejandro Vera Dev"
              src="/team/alejandro.jpg"
            />
            <h2>Alejandro Vera</h2>
            <p>Frontend Dev</p>
            <ul className={styles.about_list}>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/AlejandroV01"
                  rel="noreferrer"
                >
                  GitHub: AlejandroV01
                </a>
              </li>
              <li>
                <a href="mailto:">email@email.com</a>
              </li>
            </ul>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.person_card}>
            <img
              className={styles.slide_image}
              alt="Emily Cruz Dev"
              src="/team/emily.jpg"
            />
            <h2>Emily Cruz</h2>
            <p>Frontend/Algorithms</p>
            <ul className={styles.about_list}>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/EmilyCruzcs"
                  rel="noreferrer"
                >
                  GitHub: EmilyCruzcs
                </a>
              </li>
              <li>
                <a href="mailto:">email@email.com</a>
              </li>
            </ul>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default TheTeam;
