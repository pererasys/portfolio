import * as nextRouter from "next/router";
import { create, act } from "react-test-renderer";

import Link from "next/link";
import Image from "next/image";

import Header, { Logo } from "../../navigation/Header";

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({
  pathname: "",
  push: jest.fn(),
}));

describe("<Logo />", () => {
  const setup = () => {
    const component = create(<Logo />);

    const link = component.root.findByType(Link);
    const image = component.root.findByType(Image);

    return {
      link,
      image,
      component,
    };
  };

  it("link should have correct props", () => {
    const { link, image } = setup();

    expect(link.props.href).toBe("/");

    expect(image.props.src).toBe("/logo-primary.png");
    expect(image.props.layout).toBe("fill");
  });
});

describe("<Header />", () => {
  const setup = () => {
    const component = create(<Header />);

    return {
      component,
    };
  };

  it("should render without crashing", () => {
    const { component } = setup();

    expect(component.toJSON()).toMatchSnapshot();
  });
});
