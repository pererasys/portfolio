/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import Footer from "./navigation/Footer";
import Header from "./navigation/Header";

const Chat = dynamic(() => import("./Chat"), { ssr: false });

import styles from "../styles/components/navigation/Page.module.scss";

const PageRoot: React.FC = (props) => (
  <div className={styles.root}>
    {props.children}
    <Chat />
  </div>
);

interface Props {
  title: string;
  description: string;
  HeaderComponent?: React.ElementType;
  FooterComponent?: React.ElementType;
  RootComponent?: React.ElementType;
}

const Page: React.FC<Props> = ({
  title,
  description,
  HeaderComponent = Header,
  FooterComponent = Footer,
  RootComponent = PageRoot,
  children,
}) => {
  const router = useRouter();
  title = `${title} | Andrew Perera`;

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="title" content={title} key="title" />
        <meta name="description" content={description} key="desc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta
          property="og:url"
          content={process.env.ROOT_DOMAIN + router.pathname}
          key="ogtype"
        />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:image" content={process.env.SEO_IMG} key="ogimg" />
        <meta
          property="og:image:secure"
          content={process.env.SEO_IMG}
          key="ogimgsecure"
        />
        <meta
          property="twitter:url"
          content={process.env.ROOT_DOMAIN + router.pathname}
        />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
          property="twitter:card"
          content={process.env.SEO_IMG}
          ref="twitter-card"
        />
        <meta
          property="twitter:image"
          content={process.env.SEO_IMG}
          ref="twitter-image"
        />
        <title>{title}</title>
      </Head>
      <HeaderComponent />
      <RootComponent>{children}</RootComponent>
      <FooterComponent />
    </React.Fragment>
  );
};

export default Page;
