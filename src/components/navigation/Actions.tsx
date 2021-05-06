/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import React, { useEffect, useState } from "react";

import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";
import { faExternalLinkAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMediumM,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { IconButton } from "../common/Buttons";

import styles from "../../styles/navigation/Actions.module.scss";

const Actions = () => {
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

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const actionClasses = [styles.actions];
  if (open) actionClasses.push(styles.active);

  return (
    <React.Fragment>
      <div className={styles.root}>
        <IconButton
          icon={open ? faTimes : faExternalLinkAlt}
          onClick={open ? onClose : onOpen}
          color="accent"
        />
        <ul className={actionClasses.join(" ")}>
          <li>
            <IconButton
              href="https://github.com/pererasys"
              target="_blank"
              rel="noopener noreferrer"
              icon={faGithub}
              color="green"
            />
          </li>
          <li>
            <IconButton
              href="https://pererasys.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              icon={faMediumM}
              color="black"
            />
          </li>
          <li>
            <IconButton
              href="https://twitter.com/aperera14"
              target="_blank"
              rel="noopener noreferrer"
              icon={faTwitter}
              color="darkBlue"
            />
          </li>
          <li>
            <IconButton
              href="https://www.linkedin.com/in/pererasys/"
              target="_blank"
              rel="noopener noreferrer"
              icon={faLinkedin}
              color="lightBlue"
            />
          </li>
        </ul>
      </div>
      {open && <div className={styles.overlay} onClick={onClose}></div>}
    </React.Fragment>
  );
};

export default Actions;
