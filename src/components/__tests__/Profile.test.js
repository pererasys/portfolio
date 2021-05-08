import { create } from "react-test-renderer";

import Profile from "../Profile";

describe("<Profile />", () => {
  const setup = () => {
    const component = create(<Profile />);

    return {
      component,
    };
  };

  it("should render without crashing", () => {
    const { component } = setup();

    expect(component.toJSON()).toMatchSnapshot();
  });
});
