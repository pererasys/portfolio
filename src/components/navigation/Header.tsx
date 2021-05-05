/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";

import Menu from "./Menu";

import styles from "../../styles/navigation/Header.module.scss";

export const Logo = () => (
  <Link href="/">
    <a className={styles.logo}>
      <Image src="/logo-primary.png" layout="fill" />
    </a>
  </Link>
);

const Header: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <header className={styles.root}>
        <div className={styles.content}>
          <Logo />
          <Menu />
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
