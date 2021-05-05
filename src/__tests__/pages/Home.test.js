import { create, act } from "react-test-renderer";

import { PageProvider } from "../__utils";

import Home from "../../pages/index";

const setup = () => {
  const page = create(
    <PageProvider pathname="">
      <Home />
    </PageProvider>
  );

  return { page };
};

test("Should render without crashing", () => {
  const { page } = setup();

  expect(page.toJSON()).toMatchSnapshot();
});
