import reducers from "../redux/reducers";
import foods from "../redux/reducers/foods";

const action = {
  type: "GET_FOODS_REQUESTED",
  payload: [],
};

describe("testing reducers", () => {
  test("empty action", () => {
    expect(
      reducers(undefined, {
        foods: { error: null, foods: [], loading: false },
      })
    ).toMatchObject({
      foods: { error: null, foods: [], loading: false },
    });
  });

  test("with valid action obj", () => {
    expect(reducers(undefined, action)).toMatchObject({
      foods: { error: null, foods: [], loading: true },
    });
  });
});
