import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div>Hello app</div>
    </Provider>
  );
};

export { App };
