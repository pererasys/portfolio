import { create, act } from "react-test-renderer";

import { PageProvider } from "../__utils";

import About from "../../pages/about";

const setup = () => {
  const page = create(
    <PageProvider pathname="/about">
      <About />
    </PageProvider>
  );

  return { page };
};

test("Should render without crashing", () => {
  const { page } = setup();

  expect(page.toJSON()).toMatchSnapshot();
});
