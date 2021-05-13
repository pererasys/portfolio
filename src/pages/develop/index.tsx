/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

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
      <Landing title="Develop" subtitle="Tell me about your project!" />
      <Form />
    </Page>
  );
}
