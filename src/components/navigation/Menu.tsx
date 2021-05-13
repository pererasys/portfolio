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

const ROUTES = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Develop", path: "/develop" },
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

interface INavItem {
  label: string;
  path: string;
}

const NavItem = ({ label, path }: INavItem) => {
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

export const Routes = () => (
  <ul className={styles.routes}>
    {ROUTES.map((route) => (
      <NavItem {...route} key={route.label} />
    ))}
  </ul>
);

interface SocialActionProps {
  href: string;
  icon: IconProp;
  color: Color;
  size: "sm" | "default";
}

const SocialAction = (props: SocialActionProps) => (
  <li>
    <IconButton
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      icon={props.icon}
      color={props.color}
      size={props.size}
    />
  </li>
);

export const Social = ({
  size = "default",
}: {
  size?: SocialActionProps["size"];
}) => (
  <ul className={styles.actions}>
    {ACTIONS.map(({ color, ...action }) => (
      <SocialAction
        color={color as Color}
        size={size}
        {...action}
        key={action.href}
      />
    ))}
  </ul>
);

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
        <Routes />
        <Social size="sm" />
      </div>
    </React.Fragment>
  );
};

export default Menu;
