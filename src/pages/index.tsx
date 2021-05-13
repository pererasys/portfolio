/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import Page from "../components/Page";

import Landing from "../components/common/Landing";
import { Profile, Activities, Develop } from "../components/pages/Home";

export default function Home() {
  return (
    <Page title="Home" description="description">
      <Landing title="Andrew Perera" subtitle="I build things." />
      <Profile />
      <Activities />
      <Develop />
    </Page>
  );
}
