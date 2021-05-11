import * as nextRouter from "next/router";
import { create } from "react-test-renderer";

import Menu from "../../navigation/Menu";

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({
  pathname: "",
  push: jest.fn(),
}));

describe("<Menu />", () => {
  const setup = () => {
    const component = create(<Menu />);

    return {
      component,
    };
  };

  it("should render without crashing", () => {
    const { component } = setup();

    expect(component.toJSON()).toMatchSnapshot();
  });
});
