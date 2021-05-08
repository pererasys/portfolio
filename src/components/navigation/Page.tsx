/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import Footer from "./Footer";
import Header from "./Header";

const Actions = dynamic(() => import("./Actions"), { ssr: false });

import styles from "../../styles/navigation/Page.module.scss";

interface Props {
  title: string;
  description: string;
  hideFooter?: boolean;
}

const Page: React.FC<Props> = ({
  title,
  description,
  hideFooter,
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
      <Header />
      <div className={styles.root}>{children}</div>
      {!hideFooter && (
        <React.Fragment>
          <hr />
          <Footer />
        </React.Fragment>
      )}
      <Actions />
    </React.Fragment>
  );
};

export default Page;
