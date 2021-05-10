/**
 * @author Andrew Perera
 * Copyright (C) 2020 - All rights reserved
 */

import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  Fragment,
  MouseEvent,
} from "react";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../../styles/common/Buttons.module.scss";

export type Color =
  | "primary"
  | "accent"
  | "orange"
  | "blue"
  | "lightBlue"
  | "darkBlue"
  | "yellow"
  | "red"
  | "green"
  | "darkGreen"
  | "lightGreen"
  | "purple"
  | "lightPurple"
  | "black"
  | "secondary"
  | "white";

export interface IButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
  icon?: IconProp;
  loading?: boolean;
  loadingLabel?: string;
  size?: "lg" | "sm";
  color?: Color;
}

export const Button = ({
  label,
  icon,
  loading,
  loadingLabel,
  size,
  disabled,
  color = "primary",
  ...props
}: IButton) => {
  const className = styles[`${color}Btn${size === "sm" ? "Sm" : ""}`];

  return (
    <button className={className} disabled={disabled || loading} {...props}>
      {loading ? (
        loadingLabel
      ) : (
        <Fragment>
          {label}
          {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
        </Fragment>
      )}
    </button>
  );
};

export const ButtonOutline = ({
  label,
  icon,
  loading,
  loadingLabel,
  size,
  disabled,
  color = "primary",
  ...props
}: IButton) => {
  const className = styles[`${color}BtnOutline${size === "sm" ? "Sm" : ""}`];
  return (
    <button className={className} disabled={disabled || loading} {...props}>
      {loading ? loadingLabel : label}
      {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
    </button>
  );
};

export interface IIconAction
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  icon: IconProp;
  color?: Color;
  size?: "sm" | "default";
}

export const IconAction = ({
  color = "primary",
  size = "default",
  icon,
  ...props
}: IIconAction) => {
  return (
    <a
      className={styles[`${color}IconAction${size === "sm" ? "Sm" : ""}`]}
      {...props}
    >
      <FontAwesomeIcon icon={icon} className={styles.icon} />
    </a>
  );
};

export const IconButton = ({
  color = "primary",
  size = "default",
  icon,
  ...props
}: IIconAction) => (
  <a
    className={styles[`${color}IconBtn${size === "sm" ? "Sm" : ""}`]}
    {...props}
  >
    <FontAwesomeIcon icon={icon} className={styles.icon} />
  </a>
);
