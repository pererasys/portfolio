/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import React from "react";

import styles from "../../styles/navigation/Footer.module.scss";

const Footer = () => (
  <footer className={styles.root}>
    <div className={styles.content}>
      <p className={styles.copyright}>Copyright &copy; 2021</p>
    </div>
  </footer>
);

export default Footer;
