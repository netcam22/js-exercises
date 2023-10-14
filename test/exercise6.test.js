import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} from "../challenges/exercise6-optional";

describe("sumDigits", () => {
  test("Throws an error if not passed n parameter", () => {
    expect(() => {
      sumDigits();
    }).toThrow("n is required");
  });

  test("sums of digits", () => {
    expect(sumDigits(123456789)).toBe(45);
    expect(sumDigits(346789100)).toBe(38);
    expect(sumDigits(65466)).toBe(27);
  });

  test("sums of digits from negative numbers", () => {
    expect(sumDigits(-123456789)).toBe(45);
    expect(sumDigits(-346789100)).toBe(38);
    expect(sumDigits(-65466)).toBe(27);
  });

  test("test for zero", () => {
    expect(sumDigits(0)).toBe(0);
  });

  test("test for single digit", () => {
    expect(sumDigits(5)).toBe(5);
  });
});
/*
describe("createRange", () => {
  test("Throws an error if not passed str parameter", () => {
    expect(() => {
      createRange();
    }).toThrow("parameter str is required");
  });

  test("Throws an error if parameter passed is a number", () => {
    expect(() => {
      createRange(66);
    }).toThrow("parameter data type should be String");
  });

  test("Throws an error if parameter passed is an array", () => {
    expect(() => {
      createRange(["hello", "world"]);
    }).toThrow("parameter data type should be String");
  });

  test("Strings with valid DNA characters C, T, G or A", () => {
    expect(createRange("CGTA")).toBe(true);
    expect(createRange("CGTAAAG")).toBe(true);
    expect(createRange("CGTATGA")).toBe(true);
    expect(createRange("CGTATTTTTAG")).toBe(true);
    expect(createRange("A")).toBe(true);
    expect(createRange("CC")).toBe(true);
    expect(createRange("TTT")).toBe(true);
    expect(createRange("GGGG")).toBe(true);
  });

  test("Strings including invalid characters that are not C, T, G or A", () => {
    expect(createRange("CGTB")).toBe(false);
    expect(createRange("CGTAXZ")).toBe(false);
    expect(createRange("CGOPGA")).toBe(false);
    expect(createRange("MQAIP")).toBe(false);
  });

  test("Strings with no matching charaters", () => {
    expect(createRange("XYZ")).toBe(false);
    expect(createRange("BCDEF")).toBe(false);
    expect(createRange("LMNOP")).toBe(false);
    expect(createRange("")).toBe(false);
  });
});

describe("getScreentimeAlertList", () => {
  test("Throws an error if not passed str parameter", () => {
    expect(() => {
      getScreentimeAlertList();
    }).toThrow("parameter str is required");
  });

  test("Throws an error if parameter passed is a number", () => {
    expect(() => {
      getScreentimeAlertList(66);
    }).toThrow("parameter data type should be String");
  });

  test("Throws an error if parameter passed is an array", () => {
    expect(() => {
      getScreentimeAlertList(["hello", "world"]);
    }).toThrow("parameter data type should be String");
  });

  test("Throws an error if invalid DNA string", () => {
    expect(() => {
      getScreentimeAlertList("CGOPGA");
    }).toThrow("invalid DNA string");
  });

  test("Throws an error if empty string", () => {
    expect(() => {
      getScreentimeAlertList("");
    }).toThrow("invalid DNA string");
  });

  test("Strings with valid DNA characters C, T, G or A", () => {
    expect(getScreentimeAlertList("CGTA")).toBe("GCAT");
    expect(getScreentimeAlertList("CGTAAAG")).toBe("GCATTTC");
    expect(getScreentimeAlertList("CGTATGA")).toBe("GCATACT");
    expect(getScreentimeAlertList("CGTATTTTTAG")).toBe("GCATAAAAATC");
    expect(getScreentimeAlertList("A")).toBe("T");
    expect(getScreentimeAlertList("CC")).toBe("GG");
    expect(getScreentimeAlertList("TTT")).toBe("AAA");
    expect(getScreentimeAlertList("GGGG")).toBe("CCCC");
  });
});

describe("hexToRGB", () => {
  test("Throws an error if not passed n parameter", () => {
    expect(() => {
      hexToRGB();
    }).toThrow("parameter n is required");
  });

  test("Throws an error if parameter passed is a string", () => {
    expect(() => {
      hexToRGB("hello");
    }).toThrow("parameter should be integer of datatype number");
  });

  test("Throws an error if parameter passed is a decimal", () => {
    expect(() => {
      hexToRGB(0.75);
    }).toThrow("parameter should be integer of datatype number");
  });

  test("Throws an error if parameter passed is negative", () => {
    expect(() => {
      hexToRGB(-7);
    }).toThrow("parameter should be positive");
  });

  test("Throws an error if parameter passed is an array", () => {
    expect(() => {
      hexToRGB(["hello", "world"]);
    }).toThrow("parameter should be integer of datatype number");
  });

  test("Test numbers that are prime", () => {
    expect(hexToRGB(2)).toBe(true);
    expect(hexToRGB(11)).toBe(true);
    expect(hexToRGB(89)).toBe(true);
    expect(hexToRGB(163)).toBe(true);
    expect(hexToRGB(439)).toBe(true);
    expect(hexToRGB(757)).toBe(true);
    expect(hexToRGB(953)).toBe(true);
  });

  test("Test numbers that are not prime", () => {
    expect(hexToRGB(0)).toBe(false);
    expect(hexToRGB(1)).toBe(false);
    expect(hexToRGB(30)).toBe(false);
    expect(hexToRGB(99)).toBe(false);
    expect(hexToRGB(145)).toBe(false);
    expect(hexToRGB(649)).toBe(false);
    expect(hexToRGB(955)).toBe(false);
  });
});

describe("findWinner", () => {
  test("Throws an error if not passed any parameters", () => {
    expect(() => {
      findWinner();
    }).toThrow("no parameters passed");
  });
  test("Throws an error if not passed n parameter", () => {
    expect(() => {
      findWinner("foo");
    }).toThrow("n is required");
  });

  test("Throws an error if not passed fill parameter", () => {
    expect(() => {
      findWinner(66);
    }).toThrow("fill is required");
  });

  test("Create valid matrix", () => {
    expect(findWinner(1, 1)).toStrictEqual([[1]]);
    expect(findWinner(2, "x")).toStrictEqual([
      ["x", "x"],
      ["x", "x"],
    ]);
    expect(findWinner(3, "yes")).toStrictEqual([
      ["yes", "yes", "yes"],
      ["yes", "yes", "yes"],
      ["yes", "yes", "yes"],
    ]);
    expect(findWinner(4, "no")).toStrictEqual([
      ["no", "no", "no", "no"],
      ["no", "no", "no", "no"],
      ["no", "no", "no", "no"],
      ["no", "no", "no", "no"],
    ]);
  });

  test("Create valid matrix with object and arrays", () => {
    expect(findWinner(1, { name: "Annette", city: "Cambridge" })).toStrictEqual(
      [[{ name: "Annette", city: "Cambridge" }]]
    );
    expect(findWinner(1, [1, 2, 3, 4, 5])).toStrictEqual([[[1, 2, 3, 4, 5]]]);
    expect(findWinner(2, { dessert: "cake", type: "chocolate" })).toStrictEqual(
      [
        [
          { dessert: "cake", type: "chocolate" },
          { dessert: "cake", type: "chocolate" },
        ],
        [
          { dessert: "cake", type: "chocolate" },
          { dessert: "cake", type: "chocolate" },
        ],
      ]
    );
    expect(findWinner(3, ["a", "b", "c"])).toStrictEqual([
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
*/
