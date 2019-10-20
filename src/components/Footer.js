import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p className={styles.createdBy}>Created by Shannon O'Hehir, © 2019</p>
    </footer>
  );
};

export default Footer;
