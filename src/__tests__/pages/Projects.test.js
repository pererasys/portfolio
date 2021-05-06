import { create, act } from "react-test-renderer";
import preloadAll from "jest-next-dynamic";

import { PageProvider } from "../__utils";

import Projects from "../../pages/projects";

beforeAll(async () => {
  await preloadAll();
});

const setup = () => {
  const page = create(
    <PageProvider pathname="/projects">
      <Projects />
    </PageProvider>
  );

  return { page };
};

test("Should render without crashing", () => {
  const { page } = setup();

  expect(page.toJSON()).toMatchSnapshot();
});
