/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import Link from "next/link";
import Page from "../../components/Page";

import {
  Form,
  Header,
  Landing,
  PageRoot,
} from "../../components/pages/Develop";

export default function Develop() {
  return (
    <Page
      title="Develop"
      description="Tell me about your project!"
      HeaderComponent={Header}
      RootComponent={PageRoot}
    >
      <Landing
        title="Thank you!"
        subtitle="I'll take a look at your project and get back to you soon."
      />
      <Link href="/">
        <a>Go back</a>
      </Link>
    </Page>
  );
}
