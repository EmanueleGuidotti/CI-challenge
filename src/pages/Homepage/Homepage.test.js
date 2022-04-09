import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { HomepageContainer } from "./";
import { store } from "../../App/store";
import { renderWithProviders } from "./testUtils/renderWithProvider";
import { mockApiResponse } from "./testUtils/mockApiResponse";

const handlers = [
  rest.get("https://api.themoviedb.org/3/movie/popular", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockApiResponse));
  }),
];
const server = setupServer(...handlers);

let responseBody;
beforeEach(() => {
  server.use(
    rest.get("https://api.themoviedb.org/3/movie/popular", (req, res, ctx) => {
      responseBody = mockApiResponse;
      return res(ctx.status(200), ctx.json(responseBody));
    })
  );
});

test("Render Homepage loading status properly", async () => {
  const component = renderer.create(
    <Provider store={store}>
      <HomepageContainer />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render Homepage with most viewed movies properly", async () => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  server.listen();
  const component = renderWithProviders(<HomepageContainer />, store);
  await waitFor(() => {
    expect(responseBody).toEqual(mockApiResponse);
  });
  expect(component).toMatchSnapshot();
});
