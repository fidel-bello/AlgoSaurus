import React, { useState } from "react";
import styles from "./form.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const handleSubmit = () => {
    console.log("" + name + email + text);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wholeDiv}>
        <h1>Contact</h1>
        <div className={styles.formContainer}>
          <div className={styles.topRow}>
            <input
              value={name}
              type="text"
              placeholder="Full Name..."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <input
              value={email}
              type="text"
              placeholder="Email..."
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className={styles.bottomRow}>
            <textarea
              value={text}
              placeholder="Enter any information here..."
              className={styles.bigBox}
              rows={10}
              cols={15}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>
        </div>
        <button onSubmit={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Form;
