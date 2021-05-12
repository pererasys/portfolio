/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import Page from "../components/navigation/Page";

import Landing from "../components/common/Landing";
import { LandingContent, Profile, Activities } from "../components/pages/Home";

export default function Home() {
  return (
    <Page title="Home" description="description">
      <Landing title="Andrew Perera" subtitle="I build things." />
      <Profile />
      <Activities />
    </Page>
  );
}
