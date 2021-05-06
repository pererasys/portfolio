import { create, act } from "react-test-renderer";

import Actions from "../../navigation/Actions";

describe("<Actions />", () => {
  const setup = () => {
    const component = create(<Actions />);

    return {
      component,
    };
  };

  it("should render without crashing", () => {
    const { component } = setup();

    expect(component.toJSON()).toMatchSnapshot();
  });
});
