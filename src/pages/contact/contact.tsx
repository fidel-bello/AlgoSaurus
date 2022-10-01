import React, { useState } from "react";
import styles from "./contact.module.css";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = () => {
    console.log("" + name + email + text);
  };

  const variants = {
    hidden: { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={variants}
      className={styles.container}
    >
      <form
        action="https://getform.io/f/0cd2a2c4-a198-4b7c-84a2-e42a39237409"
        method="POST"
        className={styles.content}
      >
        {/* <input type="hidden" name="_cc" value="alexvera0109@gmail.com" />{" "} */}
        {/* <input type="hidden" name="_cc" value="fidelbello1997@gmail.com" />{" "} */}
        {/* <input type="hidden" name="_cc" value="EmilyCruz.cs" /> */}
        <h1>Contact Us</h1>
        <div className={styles.formContainer}>
          <div className={styles.topRow}>
            <input
              value={name}
              type="text"
              name="Name"
              placeholder="Full Name..."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              name="Email"
              value={email}
              type="email"
              placeholder="email@gmail.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className={styles.bottomRow}>
            <textarea
              value={text}
              name="Feedback"
              placeholder="Send us your thoughts and feedback, we appreciate it :)"
              className={styles.bigBox}
              rows={10}
              cols={15}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={styles.button_container}>
          <button type="submit" onSubmit={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
