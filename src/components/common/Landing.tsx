/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import React from "react";

import styles from "../../styles/components/common/Landing.module.scss";

interface Props {
  title: string;
  subtitle: string;
  position?: "left" | "right" | "center";
}

const Landing: React.FC<Props> = ({ position = "center", ...props }) => {
  return (
    <section className={styles.landing}>
      <div className={[styles.header, styles[position]].join(" ")}>
        <h1>{props.title}</h1>
        <p className={styles.subtitle}>{props.subtitle}</p>
      </div>
      {props.children}
    </section>
  );
};

export default Landing;
