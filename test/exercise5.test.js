import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise5";

describe("sumMultiples", () => {
  test("Throws an error if not passed arr parameter", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("parameter arr is required");
  });

  test("Throws an error if parameter passed is not an array", () => {
    expect(() => {
      sumMultiples(66);
    }).toThrow("parameter data type should be array");
  });

  test("Throws an error if parameter passed is not an array", () => {
    expect(() => {
      sumMultiples("Hello world");
    }).toThrow("parameter data type should be array");
  });

  test("sums of positive integers that are multiples of either 3 or 5", () => {
    expect(sumMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(23);
    expect(sumMultiples([3, 4, 6, 7, 8, 9, 100])).toBe(118);
    expect(sumMultiples([65, 4, 66, 75, 85, 95, 102])).toBe(488);
  });

  test("sums including negative integers that are multiples of either 3 or 5", () => {
    expect(sumMultiples([-1, -2, -3, -4, -5, -6, -7, -8, -9])).toBe(-23);
    expect(sumMultiples([-3, 4, 6, 7, 8, 9, -100])).toBe(-88);
    expect(sumMultiples([65, 4, 66, 75, 85, 95, -102])).toBe(284);
  });

  test("sums of integers where there are common multiples of both 3 and 5, but not of 3 or 5", () => {
    expect(sumMultiples([15, -30, 90, 45, 7, 8])).toBe(120);
    expect(sumMultiples([4, 7, -60, 150])).toBe(90);
  });

  test("array with only multiples of 3 or 5, but not both", () => {
    expect(sumMultiples([12, 18, 21, 24, -27])).toBe(48);
    expect(sumMultiples([5, -10, -20, 40])).toBe(15);
  });

  test("array with no multiples of 3 or 5", () => {
    expect(sumMultiples([14, -31, 47, 7, 8])).toBe(0);
    expect(sumMultiples([4, 7, -61, 151])).toBe(0);
  });

  test("sums of numbers, inlcuding decimals, that are multiples of either 3 or 5", () => {
    expect(sumMultiples([1, 2, 3, 4.7, 5.5, 6.0, 7, 8, 9])).toBe(18);
    expect(sumMultiples([3, 4, 6, 7, 8.8, 9.0, 100.111])).toBe(18);
    expect(sumMultiples([65.555, 4, 0.66, 0.75, 85, 95, 102])).toBe(282);
  });

  test.only("empty array", () => {
    expect(sumMultiples([])).toBe(0);
  });
});

describe("isValidDNA", () => {
  test.only("Throws an error if not passed str parameter", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("parameter str is required");
  });

  test.only("Throws an error if parameter passed is not a string", () => {
    expect(() => {
      isValidDNA(66);
    }).toThrow("parameter data type should be String");
  });

  test("", () => {
    expect(isValidDNA()).toBe();
  });
});

describe("getComplementaryDNA", () => {
  test("Throws an error if not passed str parameter", () => {
    expect(() => {
      getComplementaryDNA();
    }).toThrow("parameter str is required");
  });

  test("Throws an error if parameter passed is not a string", () => {
    expect(() => {
      getComplementaryDNA(66);
    }).toThrow("parameter data type should be a string.");
  });

  test("", () => {
    expect(getComplementaryDNA()).toBe();
  });
});

describe("isItPrime", () => {
  test("Throws an error if not passed n parameter", () => {
    expect(() => {
      isItPrime();
    }).toThrow("parameter n is required");
  });

  test("Throws an error if parameter passed is not a number", () => {
    expect(() => {
      isItPrime("hello");
    }).toThrow("parameter data type should be a number");
  });

  test("", () => {
    expect(isItPrime()).toBe();
  });
});

describe("createMatrix", () => {
  test("Throws an error if not passed ... parameter", () => {
    expect(() => {
      createMatrix();
    }).toThrow("parameter ... is required");
  });

  test("Throws an error if parameter passed is not ......", () => {
    expect(() => {
      createMatrix(66);
    }).toThrow("parameter data type should be ....");
  });

  test("", () => {
    expect(createMatrix()).toBe();
  });
});

describe("areWeCovered", () => {
  test("Throws an error if not passed staff and day parameters", () => {
    expect(() => {
      areWeCovered();
    }).toThrow("parameter staff and day are required");
  });

  test("Throws an error if parameters passed are not Array and String", () => {
    expect(() => {
      areWeCovered(66);
    }).toThrow("parameter data types should be Array and String");
  });

  test("", () => {
    expect(areWeCovered()).toBe();
  });
});
