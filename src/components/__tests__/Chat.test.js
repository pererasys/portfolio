import { create } from "react-test-renderer";

import Chat from "../Chat";

describe("<Chat />", () => {
  const setup = () => {
    const component = create(<Chat />);

    return {
      component,
    };
  };

  it("should render without crashing", () => {
    const { component } = setup();

    expect(component.toJSON()).toMatchSnapshot();
  });
});
