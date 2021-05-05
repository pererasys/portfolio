/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import styles from "../../styles/common/Landing.module.scss";

interface Props {
  title: string;
  subtitle: string;
  position?: "left" | "right" | "center";
}

const Landing = ({ position = "center", ...props }: Props) => {
  return (
    <section className={[styles.landing, styles[position]].join(" ")}>
      <h1>{props.title}</h1>
      <p className={styles.subtitle}>{props.subtitle}</p>
    </section>
  );
};

export default Landing;
