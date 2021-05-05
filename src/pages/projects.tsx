/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import Page from "../components/navigation/Page";

import Landing from "../components/common/Landing";

export default function Projects() {
  return (
    <Page title="Projects" description="A few of my projects.">
      <Landing
        title="Projects"
        subtitle="Explore my projects."
        position="left"
      />
    </Page>
  );
}
