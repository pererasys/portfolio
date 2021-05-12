import { create } from "react-test-renderer";

import Landing from "../../common/Landing";

const setup = (props) => {
  const component = create(<Landing {...props} />);

  const title = component.root.findByType("h1");
  const subtitle = component.root.findByType("p");

  return {
    title,
    subtitle,
    component,
  };
};

test("should render without crashing", () => {
  const props = { title: "Test", subtitle: "test subtitle" };
  const { component } = setup(props);

  expect(component.toJSON()).toMatchSnapshot();
});

test("should render appropriately", () => {
  const props = { title: "Test", subtitle: "test subtitle" };
  const { title, subtitle } = setup(props);

  expect(title.children).toContain(props.title);
  expect(subtitle.children).toContain(props.subtitle);
});
