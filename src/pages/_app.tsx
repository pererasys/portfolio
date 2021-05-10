/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import { AppProps } from "next/app";
import Router from "next/router";

import NProgress from "nprogress";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "../styles/globals.scss";
import "../styles/nprogress.scss";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
