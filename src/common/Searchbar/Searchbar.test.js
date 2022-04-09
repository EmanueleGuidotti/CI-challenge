import React from "react";
import renderer from "react-test-renderer";
import { Searchbar } from "./Searchbar";

test("Render Searchbar component properly", () => {
  const onKeyUp = jest.fn();
  const component = renderer.create(<Searchbar onKeyUp={onKeyUp} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Call onKeyUp properly", () => {
  const onKeyUp = jest.fn();
  const component = renderer.create(<Searchbar onKeyUp={onKeyUp} />);
  let tree = component.toJSON();
  tree.props.onKeyUp({ target: { value: "e" } });
  expect(onKeyUp).toBeCalled();
  expect(onKeyUp).toBeCalledTimes(1);
});
