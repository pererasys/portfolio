/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import React, { useEffect, useState } from "react";

import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";
import {
  faEllipsisH,
  faEnvelope,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
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
          icon={open ? faTimes : faEllipsisH}
          onClick={open ? onClose : onOpen}
          color="accent"
        />
        <ul className={actionClasses.join(" ")}>
          <li>
            <IconButton
              icon={faLinkedin}
              onClick={undefined}
              color="lightBlue"
            />
          </li>
          <li>
            <IconButton
              icon={faGithub}
              onClick={undefined}
              color="lightPurple"
            />
          </li>
          <li>
            <IconButton icon={faTwitter} onClick={undefined} color="yellow" />
          </li>
          <li>
            <IconButton icon={faEnvelope} onClick={undefined} color="green" />
          </li>
        </ul>
      </div>
      {open && <div className={styles.overlay} onClick={onClose}></div>}
    </React.Fragment>
  );
};

export default Actions;
