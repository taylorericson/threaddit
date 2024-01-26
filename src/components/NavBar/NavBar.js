import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <h1>Threaddit</h1>
      <input type="text" placeholder="search" />
    </div>
  );
};

export default NavBar;
