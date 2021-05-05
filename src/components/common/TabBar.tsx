/**
 * @author Andrew Perera
 * Copyright (C) 2020 - All rights reserved
 */

import Link from "next/link";

import styles from "../../styles/common/Tabbar.module.scss";

interface ITab {
  path: string;
  label: string;
  active: boolean;
}

const Tab = ({ label, path, active }: ITab) => {
  const classes = [styles.tab];
  if (active) classes.push(styles.active);

  return (
    <Link href={path}>
      <a className={classes.join(" ")}>{label}</a>
    </Link>
  );
};

interface ITabBar {
  tabs: ITab[];
  sticky?: boolean;
}

const TabBar = ({ tabs, sticky }: ITabBar) => (
  <div className={[styles.root, sticky ? styles.sticky : ""].join(" ")}>
    {tabs.map((tab, index) => (
      <Tab {...tab} key={String(index)} />
    ))}
  </div>
);

export default TabBar;
