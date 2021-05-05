/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import Page from "../components/navigation/Page";

import Landing from "../components/common/Landing";

export default function About() {
  return (
    <Page title="About" description="About me.">
      <Landing
        title="About"
        subtitle="Learn a little bit about me and what I do."
        position="left"
      />
    </Page>
  );
}
