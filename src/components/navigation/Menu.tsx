/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Squash as Hamburger } from "hamburger-react";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

import styles from "../../styles/navigation/Menu.module.scss";

interface INavItem {
  label: string;
  path: string;
}

export const NavItem = ({ label, path }: INavItem) => {
  const router = useRouter();

  const isActive = router.pathname === path;

  let classes = [styles.navItem];
  if (isActive) classes.push(styles.active);

  return (
    <li>
      <Link href={path}>
        <a className={classes.join(" ")}>
          <p className={styles.label}>{label}</p>
        </a>
      </Link>
    </li>
  );
};

const ROUTES = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const elem = document.querySelector("body");
    if (open) {
      disableBodyScroll(elem);
    } else {
      enableBodyScroll(elem);
    }
  }, [open]);

  const classes = [styles.root];

  if (open) classes.push(styles.active);

  return (
    <React.Fragment>
      <div className={styles.action}>
        <Hamburger size={28} color="black" toggled={open} toggle={setOpen} />
      </div>
      <div className={classes.join(" ")}>
        <ul className={styles.navigation}>
          {ROUTES.map((route) => (
            <NavItem {...route} key={route.label} />
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Menu;
