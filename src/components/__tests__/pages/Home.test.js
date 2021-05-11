import { create } from "react-test-renderer";

import * as Home from "../../pages/Home";

describe("<Home.Profile />", () => {
  const setup = () => {
    const component = create(<Home.Profile />);

    return {
      component,
    };
  };

  it("should render without crashing", () => {
    const { component } = setup();

    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe("<Home.Activities />", () => {
  const setup = () => {
    const component = create(<Home.Activities />);

    return {
      component,
    };
  };

  it("should render without crashing", () => {
    const { component } = setup();

    expect(component.toJSON()).toMatchSnapshot();
  });
});
