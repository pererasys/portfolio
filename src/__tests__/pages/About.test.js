import { create, act } from "react-test-renderer";
import preloadAll from "jest-next-dynamic";

import { PageProvider } from "../__utils";

import About from "../../pages/about";

beforeAll(async () => {
  await preloadAll();
});

const setup = async () => {
  const page = create(
    <PageProvider pathname="/about">
      <About />
    </PageProvider>
  );

  return { page };
};

test("Should render without crashing", async () => {
  const { page } = await setup();

  expect(page.toJSON()).toMatchSnapshot();
});
