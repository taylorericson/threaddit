import React from "react";
import styles from "./Subreddit.module.css";

const Subreddit = ({ name, icon }) => {
  return (
    <li className={styles.listItem}>
      <img src={icon} alt={name} className={styles.icon} />
      <p className={styles.subreddit}>{name}</p>
    </li>
  );
};

export default Subreddit;
