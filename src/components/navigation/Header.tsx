/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";

import Menu from "./Menu";

import styles from "../../styles/components/navigation/Header.module.scss";

export const Logo = () => (
  <Link href="/">
    <a className={styles.logo}>
      <Image src="/images/logo-primary.png" alt="Brand logo" layout="fill" />
    </a>
  </Link>
);

const Header = () => {
  return (
    <header className={styles.root}>
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
