import { findMax } from "../challenges/exercise9";

//Using Test-Driven Development, create a function that take a list of integers as an argument and returns a string with the interpolated max value.
// INPUT: 10, 2, 3, 5, 6
//OUTPUT: The maximum value is 10.

describe("find maximum number", () => {
  test("return maximum of two simple numbers", () => {
    //arrange
    const input = [2, 10];
    const expectedResult = `The maximum value is 10`;
    //act
    const maxFunction = findMax(input);
    //assert
    expect(maxFunction).toBe(expectedResult);
  });
  test("return maximum of five simple numbers", () => {
    //arrange
    const input = [10, 2, 3, 5, 6];
    const expectedResult = `The maximum value is 10`;
    //act
    const maxFunction = findMax(input);
    //assert
    expect(maxFunction).toBe(expectedResult);
  });
  test("Throws an error if not passed arr parameter", () => {
    expect(() => {
      findMax();
    }).toThrow("numArray is required");
  });

  test("Throws an error if parameter passed is not an array", () => {
    expect(() => {
      findMax(66);
    }).toThrow("parameter data type should be Array");
  });
});
