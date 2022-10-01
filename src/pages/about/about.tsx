import React from "react";
import styles from "./about.module.css";

const About = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>About AlgoSaurus</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab,
          praesentium, illum itaque rerum aliquid in, dolores animi nulla sunt
          tempora odit! Nemo corrupti quae consectetur, dolorem doloribus ea
          nisi?
        </p>
        <h2>Inspiration</h2>
        <p>
          Looking back at the beginning of our coding journey we all found
          something in common, that algorithms are hard. Up-and-coming
          programmers who are faced with this long program of nested for loops
          are faced with confusion and a lot end up giving up on their dreams.
          So we decided to make AlgoSaurus, an algorithm visualizing platform in
          order to help newer programmers grasp a better understanding of a
          difficult concept.
        </p>
        <h2>What it does.</h2>
        <p>
          AlgoSaurus implements all the most used sorting algorithms and
          visualizes them in a chart that has live animated sorting. Users can
          also add more bars in the chart to sort and make the algorithm go
          faster or slower to further help the user visualize exactly what is
          going on. Information is also displayed on each algorithm which gives
          a description of how the algorithms work.
        </p>
        <h2>How we built it.</h2>
        <p>
          AlgoSaurus uses Typescript and React.js in order to effectively
          visualize the algorithms live. We also spent a lot of time studying
          the algorithms to have a clear understanding of exactly what is
          happening.
        </p>
        <h2>Challenges we ran into.</h2>
        <p>
          The biggest challenge we ran into was the visualization of the
          algorithm. Coding the program in a way so that the current index which
          is being manipulated by the algorithm is highlighted was a challenge.
          Each algorithm has its own individual code and its own number of
          indexes that are being manipulated, making it almost mandatory to
          understand the loop.
        </p>
        <h2>Accomplishments that we&apos;re proud of.</h2>
        <p>
          The biggest accomplishment that we are proud of is having the project
          up and running as a team. We are all excited and proud to have worked
          together so flawlessly. Collaboration is key in these types of
          projects and we could not be any happier with the results. While we
          are finished for the hackathon, this project can be something we can
          keep building on and improving as a team.
        </p>
        <h2>What we learned</h2>
        <p>
          In this project, we all learned new unique ways how to use TypeScript,
          React.js, HTML, and CSS. Working together as a team, everyone brings
          so many different values to the table and everyone&apos;s unique
          tricks on working on a problem were amazing to see. We also learned so
          much more from going around to different tables and talking to them
          about their project and looking at how they do things. But, above all,
          we all learned how to work as a team. We all worked extremely hard and
          communication was of the utmost importance.
        </p>
        <h2>Whats next for AlgoSaurus</h2>
        <p>
          AlgoSaurus still have much more room for improvement as an educative
          system. Computer programming is hot on the market right now, and with
          new programmers coming in every day, the need for an educative system
          that aids these new programmers is a must. We definitely see
          AlgoSaurus being a scalable project. Adding authentication and log-in
          system, including more algorithms, and possibly even adding a matching
          tutoring system or live chat are ideas that are all being thought of
          by us.
        </p>
        <h2>Built With</h2>
        <ul>
          <li>ReactJS</li>
          <li>TypeScript</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
