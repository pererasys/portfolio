import { create } from "react-test-renderer";

import Overlay from "../../common/Overlay";

describe("<Overlay />", () => {
  const setup = () => {
    const component = create(<Overlay />);

    return {
      component,
    };
  };

  it("should render without crashing", () => {
    const { component } = setup();

    expect(component.toJSON()).toMatchSnapshot();
  });
});
