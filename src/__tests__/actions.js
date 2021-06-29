import { getFoods } from "../redux/actions/foods";

describe("action testing", () => {
  it("should create an action and match", () => {
    const expectedAction = {
      type: "GET_FOODS_REQUESTED",
    };
    expect(getFoods()).toEqual(expectedAction);
  });
});
