/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Profile.module.scss";

const Profile = () => {
  return (
    <section className={styles.root}>
      <div className={styles.column}>
        <h1>About Me</h1>
      </div>
      <div className={styles.column}>
        <Image
          src="/me.jpeg"
          height={300}
          width={300}
          layout="intrinsic"
          className={styles.image}
        />
        <p className={styles.content}>
          I'm Andrew! I recently graduated from the University of South Carolina
          with a major in Computer Science and minor in Business. I started
          teaching myself about software engineering two years ago and am
          currently a developer at Vanguard.
        </p>
        <Link href="/about">
          <a>See more</a>
        </Link>
      </div>
    </section>
  );
};

export default Profile;
