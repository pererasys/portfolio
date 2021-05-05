import { create, act } from "react-test-renderer";

import { PageProvider } from "../__utils";

import Projects from "../../pages/projects";

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
