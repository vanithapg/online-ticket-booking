import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../redux/reducers";
import App from "../App";
import { useSelector, useDispatch } from "react-redux";

const store = createStore(reducers);
const component = renderer.create(
  <Provider store={store}>
    <App />
  </Provider>
);

describe("testing components", () => {
  test("no fooditems snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("with food items snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
