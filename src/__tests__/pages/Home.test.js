import { create } from "react-test-renderer";
import preloadAll from "jest-next-dynamic";

import { PageProvider } from "../__utils";

import Home from "../../pages/index";

beforeAll(async () => {
  await preloadAll();
});

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
