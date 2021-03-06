/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Squash as Hamburger } from "hamburger-react";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

import {
  faGithub,
  faLinkedin,
  faMediumM,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { IconButton, Color } from "../common/Buttons";

import styles from "../../styles/components/navigation/Menu.module.scss";

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

interface ActionProps {
  href: string;
  icon: IconProp;
  color: Color;
}

const Action = (props: ActionProps) => (
  <li>
    <IconButton
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      icon={props.icon}
      color={props.color}
    />
  </li>
);

const ROUTES = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
];

const ACTIONS = [
  {
    href: "https://github.com/pererasys",
    icon: faGithub,
    color: "green",
  },
  {
    href: "https://pererasys.medium.com/",
    icon: faMediumM,
    color: "black",
  },
  {
    href: "https://twitter.com/aperera14",
    icon: faTwitter,
    color: "darkBlue",
  },
  {
    href: "https://linkedin.com/in/pererasys",
    icon: faLinkedin,
    color: "lightBlue",
  },
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
        <ul className={styles.routes}>
          {ROUTES.map((route) => (
            <NavItem {...route} key={route.label} />
          ))}
        </ul>
        <ul className={styles.actions}>
          {ACTIONS.map(({ color, ...action }) => (
            <Action color={color as Color} {...action} key={action.href} />
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Menu;
