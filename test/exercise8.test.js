import { findMax } from "../challenges/exercise8";

describe("findMax", () => {
  test("returns the maxiumum number in an array", () => {
    const numArray = [1, 2, 3];
    expect(findMax(numArray)).toBe(3);
  });
});
