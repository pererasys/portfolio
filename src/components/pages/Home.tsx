/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faBitcoin, faMedium } from "@fortawesome/free-brands-svg-icons";

import { Button } from "../common/Buttons";

import styles from "../../styles/pages/Home.module.scss";

interface IActivity {
  icon: IconProp;
  title: string;
  description: string;
  color: string;
}

const Activity = (props: IActivity) => (
  <li className={styles[`${props.color}Skill`]}>
    <FontAwesomeIcon icon={props.icon} className={styles.icon} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>
);

const ACTIVITIES = [
  {
    icon: faCode,
    title: "Software Developer",
    description:
      "Fullstack developer specializing in modern web technologies (React, GraphQL, AWS, etc.).",
    color: "purple",
  },
  {
    icon: faBitcoin,
    title: "Investor",
    description:
      "Active investor in equity and crypto markets, with a focus on deep value and high growth assets.",
    color: "darkBlue",
  },
  {
    icon: faMedium,
    title: "Author",
    description:
      "Growing following on platforms like Medium, with articles published in publications such as TheStartup.",
    color: "orange",
  },
];

export const Activities = () => (
  <section className={styles.activities}>
    <div className={styles.header}>
      <h1>Activities</h1>
      <p>Get to know me by exploring my professional interests.</p>
    </div>

    <ul>
      {ACTIVITIES.map((skill, index) => (
        <Activity {...skill} key={String(index)} />
      ))}
    </ul>
  </section>
);

export const Profile = () => (
  <section className={styles.profile}>
    <div>
      <Image
        src="/images/me.jpeg"
        height={300}
        width={300}
        layout="intrinsic"
        className={styles.profileImage}
      />
    </div>
    <div className={styles.content}>
      <h1>About Me</h1>
      <p>
        I'm a self-taught developer from Charleston, SC and recent graduate of
        University of South Carolina with a focus in Computer Science and
        Business.
      </p>
      <Link href="/about">
        <a className={styles.action}>See more</a>
      </Link>
    </div>
  </section>
);

export const Develop = () => {
  const router = useRouter();

  const onNavigate = () => {
    router.push("/develop");
  };

  return (
    <section className={styles.develop}>
      <div className={styles.header}>
        <h1>Looking for a developer?</h1>
        <p>Tell me about your project!</p>
      </div>
      <Button label="Get Started" onClick={onNavigate} />
    </section>
  );
};
