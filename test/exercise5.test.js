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
    }).toThrow("parameter data type should be Array");
  });

  test("Throws an error if parameter passed is not an array", () => {
    expect(() => {
      sumMultiples("Hello world");
    }).toThrow("parameter data type should be Array");
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

  test("empty array", () => {
    expect(sumMultiples([])).toBe(0);
  });
});

describe("isValidDNA", () => {
  test("Throws an error if not passed str parameter", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("parameter str is required");
  });

  test("Throws an error if parameter passed is a number", () => {
    expect(() => {
      isValidDNA(66);
    }).toThrow("parameter data type should be String");
  });

  test("Throws an error if parameter passed is an array", () => {
    expect(() => {
      isValidDNA(["hello", "world"]);
    }).toThrow("parameter data type should be String");
  });

  test("Strings with valid DNA characters C, T, G or A", () => {
    expect(isValidDNA("CGTA")).toBe(true);
    expect(isValidDNA("CGTAAAG")).toBe(true);
    expect(isValidDNA("CGTATGA")).toBe(true);
    expect(isValidDNA("CGTATTTTTAG")).toBe(true);
    expect(isValidDNA("A")).toBe(true);
    expect(isValidDNA("CC")).toBe(true);
    expect(isValidDNA("TTT")).toBe(true);
    expect(isValidDNA("GGGG")).toBe(true);
  });

  test("Strings including invalid characters that are not C, T, G or A", () => {
    expect(isValidDNA("CGTB")).toBe(false);
    expect(isValidDNA("CGTAXZ")).toBe(false);
    expect(isValidDNA("CGOPGA")).toBe(false);
    expect(isValidDNA("MQAIP")).toBe(false);
  });

  test("Strings with no matching charaters", () => {
    expect(isValidDNA("XYZ")).toBe(false);
    expect(isValidDNA("BCDEF")).toBe(false);
    expect(isValidDNA("LMNOP")).toBe(false);
    expect(isValidDNA("")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("Throws an error if not passed str parameter", () => {
    expect(() => {
      getComplementaryDNA();
    }).toThrow("parameter str is required");
  });

  test("Throws an error if parameter passed is a number", () => {
    expect(() => {
      getComplementaryDNA(66);
    }).toThrow("parameter data type should be String");
  });

  test("Throws an error if parameter passed is an array", () => {
    expect(() => {
      getComplementaryDNA(["hello", "world"]);
    }).toThrow("parameter data type should be String");
  });

  test("Throws an error if invalid DNA string", () => {
    expect(() => {
      getComplementaryDNA("CGOPGA");
    }).toThrow("invalid DNA string");
  });

  test("Throws an error if empty string", () => {
    expect(() => {
      getComplementaryDNA("");
    }).toThrow("invalid DNA string");
  });

  test("Strings with valid DNA characters C, T, G or A", () => {
    expect(getComplementaryDNA("CGTA")).toBe("GCAT");
    expect(getComplementaryDNA("CGTAAAG")).toBe("GCATTTC");
    expect(getComplementaryDNA("CGTATGA")).toBe("GCATACT");
    expect(getComplementaryDNA("CGTATTTTTAG")).toBe("GCATAAAAATC");
    expect(getComplementaryDNA("A")).toBe("T");
    expect(getComplementaryDNA("CC")).toBe("GG");
    expect(getComplementaryDNA("TTT")).toBe("AAA");
    expect(getComplementaryDNA("GGGG")).toBe("CCCC");
  });
});

describe("isItPrime", () => {
  test("Throws an error if not passed n parameter", () => {
    expect(() => {
      isItPrime();
    }).toThrow("parameter n is required");
  });

  test("Throws an error if parameter passed is a string", () => {
    expect(() => {
      isItPrime("hello");
    }).toThrow("parameter should be integer of datatype number");
  });

  test("Throws an error if parameter passed is a decimal", () => {
    expect(() => {
      isItPrime(0.75);
    }).toThrow("parameter should be integer of datatype number");
  });

  test("Throws an error if parameter passed is negative", () => {
    expect(() => {
      isItPrime(-7);
    }).toThrow("parameter should be positive");
  });

  test("Throws an error if parameter passed is an array", () => {
    expect(() => {
      isItPrime(["hello", "world"]);
    }).toThrow("parameter should be integer of datatype number");
  });

  test("Test numbers that are prime", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(11)).toBe(true);
    expect(isItPrime(89)).toBe(true);
    expect(isItPrime(163)).toBe(true);
    expect(isItPrime(439)).toBe(true);
    expect(isItPrime(757)).toBe(true);
    expect(isItPrime(953)).toBe(true);
  });

  test("Test numbers that are not prime", () => {
    expect(isItPrime(0)).toBe(false);
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(30)).toBe(false);
    expect(isItPrime(99)).toBe(false);
    expect(isItPrime(145)).toBe(false);
    expect(isItPrime(649)).toBe(false);
    expect(isItPrime(955)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("Throws an error if not passed any parameters", () => {
    expect(() => {
      createMatrix();
    }).toThrow("no parameters passed");
  });
  test("Throws an error if not passed n parameter", () => {
    expect(() => {
      createMatrix("foo");
    }).toThrow("n is required");
  });

  test("Throws an error if not passed fill parameter", () => {
    expect(() => {
      createMatrix(66);
    }).toThrow("fill is required");
  });

  test("Create valid matrix", () => {
    expect(createMatrix(1, 1)).toStrictEqual([[1]]);
    expect(createMatrix(2, "x")).toStrictEqual([
      ["x", "x"],
      ["x", "x"],
    ]);
    expect(createMatrix(3, "yes")).toStrictEqual([
      ["yes", "yes", "yes"],
      ["yes", "yes", "yes"],
      ["yes", "yes", "yes"],
    ]);
    expect(createMatrix(4, "no")).toStrictEqual([
      ["no", "no", "no", "no"],
      ["no", "no", "no", "no"],
      ["no", "no", "no", "no"],
      ["no", "no", "no", "no"],
    ]);
  });

  test("Create valid matrix with object and arrays", () => {
    expect(
      createMatrix(1, { name: "Annette", city: "Cambridge" })
    ).toStrictEqual([[{ name: "Annette", city: "Cambridge" }]]);
    expect(createMatrix(1, [1, 2, 3, 4, 5])).toStrictEqual([[[1, 2, 3, 4, 5]]]);
    expect(
      createMatrix(2, { dessert: "cake", type: "chocolate" })
    ).toStrictEqual([
      [
        { dessert: "cake", type: "chocolate" },
        { dessert: "cake", type: "chocolate" },
      ],
      [
        { dessert: "cake", type: "chocolate" },
        { dessert: "cake", type: "chocolate" },
      ],
    ]);
    expect(createMatrix(3, ["a", "b", "c"])).toStrictEqual([
      [
        ["a", "b", "c"],
        ["a", "b", "c"],
        ["a", "b", "c"],
      ],
      [
        ["a", "b", "c"],
        ["a", "b", "c"],
        ["a", "b", "c"],
      ],
      [
        ["a", "b", "c"],
        ["a", "b", "c"],
        ["a", "b", "c"],
      ],
    ]);
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
