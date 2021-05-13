/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import React from "react";

import styles from "../../styles/components/navigation/Footer.module.scss";

const Footer = () => (
  <footer className={styles.root}>
    <div className={styles.content}>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
    </div>
  </footer>
);

export default Footer;
