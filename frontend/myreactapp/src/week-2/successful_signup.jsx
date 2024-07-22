import React from "react";
import styles from "./static/styles/successful_signup.module.css";

const SuccessfulSignup = ({ message, onClose }) => {
  return (
    <div className={styles.outerbox}>
      <div className={styles.contentbox}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SuccessfulSignup;
