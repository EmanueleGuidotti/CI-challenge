import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../../App/store";

const renderWithProviders = (
  ui,
  { preloadedState = {}, myStore = store, ...renderOptions } = {}
) => {
  const Wrapper = ({ children }) => {
    return <Provider store={myStore}>{children}</Provider>;
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export { renderWithProviders };
