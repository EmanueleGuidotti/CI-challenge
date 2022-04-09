import { Provider } from "react-redux";
import { store } from "./store";
import { HomepageContainer } from "../pages/Homepage";

const App = () => {
  return (
    <Provider store={store}>
      <HomepageContainer />
    </Provider>
  );
};

export { App };
