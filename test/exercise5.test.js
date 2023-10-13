import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise5";

describe("sumMultiples", () => {
  test.only("sums of positive integers that are multiples of either 3 or 5", () => {
    expect(sumMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(23);
    expect(sumMultiples([3, 4, 6, 7, 8, 9, 100])).toBe(118);
    expect(sumMultiples([65, 4, 66, 75, 85, 95, 102])).toBe(488);
  });

  test.only("sums including negative integers that are multiples of either 3 or 5", () => {
    expect(sumMultiples([-1, -2, -3, -4, -5, -6, -7, -8, -9])).toBe(-23);
    expect(sumMultiples([-3, 4, 6, 7, 8, 9, -100])).toBe(-88);
    expect(sumMultiples([65, 4, 66, 75, 85, 95, -102])).toBe(284);
  });

  test.only("sums of integers where there are common multiples of both 3 and 5, but not of 3 or 5", () => {
    expect(sumMultiples([15, -30, 90, 45, 7, 8])).toBe(120);
    expect(sumMultiples([4, 7, -60, 150])).toBe(90);
  });

  test.only("array with only multiples of 3 or 5, but not both", () => {
    expect(sumMultiples([12, 18, 21, 24, -27])).toBe(48);
    expect(sumMultiples([5, -10, -20, 40])).toBe(15);
  });

  test.only("array with no multiples of 3 or 5", () => {
    expect(sumMultiples([14, -31, 47, 7, 8])).toBe(0);
    expect(sumMultiples([4, 7, -61, 151])).toBe(0);
  });

  test.only("sums of numbers, inlcuding decimals, that are multiples of either 3 or 5", () => {
    expect(sumMultiples([1, 2, 3, 4.7, 5.5, 6, 7, 8, 9])).toBe(18);
    expect(sumMultiples([3, 4, 6, 7, 8.8, 9, 100.111])).toBe(18);
    expect(sumMultiples([65.555, 4, 0.66, 0.75, 85, 95, 102])).toBe(282);
  });
});

describe("isValidDNA", () => {
  test("", () => {
    expect(isValidDNA()).toBe();
  });
});

describe("getComplementaryDNA", () => {
  test("", () => {
    expect(getComplementaryDNA()).toBe();
  });
});

describe("isItPrime", () => {
  test("", () => {
    expect(isItPrime()).toBe();
  });
});

describe("createMatrix", () => {
  test("", () => {
    expect(createMatrix()).toBe();
  });
});

describe("areWeCovered", () => {
  test("", () => {
    expect(areWeCovered()).toBe();
  });
});
