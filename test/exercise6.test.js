import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} from "../challenges/exercise6-optional";

describe("sumDigits", () => {
  test("Throws an error if not passed n parameter", () => {
    expect(() => {
      sumDigits();
    }).toThrow("n is required");
  });

  test("Throws an error if n is a string", () => {
    expect(() => {
      sumDigits("Hello");
    }).toThrow("n should be integer of datatype number");
  });

  test("Throws an error if n is an array", () => {
    expect(() => {
      sumDigits(["1", "2"]);
    }).toThrow("n should be integer of datatype number");
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

describe("createRange", () => {
  test("Throws an error if not passed any parameters", () => {
    expect(() => {
      createRange();
    }).toThrow("start and end are required");
  });

  test("End is required", () => {
    expect(() => {
      createRange(1);
    }).toThrow("end is required");
  });

  test("Range without step parameter", () => {
    expect(createRange(3, 11)).toStrictEqual([3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });

  test("Range with positive numbers", () => {
    expect(createRange(3, 11, 2)).toStrictEqual([3, 5, 7, 9, 11]);
  });

  test("Range with negative numbers", () => {
    expect(createRange(-5, -20, -3)).toStrictEqual([
      -5, -8, -11, -14, -17, -20
    ]);
  });

  test("Range starting with 0", () => {
    expect(createRange(0, 100, 10)).toStrictEqual([
      0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
    ]);
  });
});

describe("getScreentimeAlertList", () => {
  test("Throws an error if parameter users not passed", () => {
    expect(() => {
      getScreentimeAlertList("2019-05-04");
    }).toThrow("array of users is required");
  });

  test("Throws an error if parameter date not passed", () => {
    expect(() => {
      getScreentimeAlertList([]);
    }).toThrow("date is required");
  });

  test("valid dates and data", () => {
    expect(
      getScreentimeAlertList(
        [
          {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
              {
                date: "2019-05-01",
                usage: { twitter: 34, instagram: 22, facebook: 40 }
              },
              {
                date: "2019-05-02",
                usage: { twitter: 56, instagram: 40, facebook: 31 }
              },
              {
                date: "2019-05-03",
                usage: { twitter: 12, instagram: 15, facebook: 19 }
              },
              {
                date: "2019-05-04",
                usage: { twitter: 10, instagram: 56, facebook: 61 }
              }
            ]
          },
          {
            username: "jane_1234",
            name: "Jane Smith",
            screenTime: [
              {
                date: "2019-05-01",
                usage: { twitter: 34, instagram: 22, facebook: 40 }
              },
              {
                date: "2019-05-02",
                usage: { twitter: 56, instagram: 40, facebook: 31 }
              },
              {
                date: "2019-05-03",
                usage: { twitter: 12, instagram: 15, facebook: 19 }
              },
              {
                date: "2019-05-04",
                usage: { twitter: 10, instagram: 56, facebook: 61 }
              }
            ]
          },
          {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
              {
                date: "2019-06-11",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 }
              },
              {
                date: "2019-06-13",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 }
              },
              {
                date: "2019-06-14",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 }
              }
            ]
          }
        ],
        "2019-05-04"
      )
    ).toStrictEqual(["beth_1234", "jane_1234"]);
  });
});

describe("hexToRGB", () => {
  test("Throws an error if not passed str parameter", () => {
    expect(() => {
      hexToRGB();
    }).toThrow("hexStr is required");
  });

  test("Throws an error if hex string is invalid", () => {
    expect(() => {
      hexToRGB("#FF228");
    }).toThrow("invalid hex string");
  });

  test("Throws an error if parameter passed is not a string", () => {
    expect(() => {
      hexToRGB(["hello", "world"]);
    }).toThrow("parameter data type should be String");
  });

  test("Strings with valid HEX characters", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    expect(hexToRGB("#FF5733")).toBe("rgb(255,87,51)");
    expect(hexToRGB("#FFC300")).toBe("rgb(255,195,0)");
    expect(hexToRGB("#FF5733")).toBe("rgb(255,87,51)");
    expect(hexToRGB("#900C3F")).toBe("rgb(144,12,63)");
    expect(hexToRGB("#581845")).toBe("rgb(88,24,69)");
    expect(hexToRGB("#000000")).toBe("rgb(0,0,0)");
  });
});

describe("findWinner", () => {
  test("Throws an error if not passed board parameter", () => {
    expect(() => {
      findWinner();
    }).toThrow("board is required");
  });

  test("valid arrays of noughts and crosses with vertical or horizontal wins", () => {
    expect(
      findWinner([
        ["X", "0", null],
        ["X", null, "0"],
        ["X", null, "0"]
      ])
    ).toBe("X");
    expect(
      findWinner([
        ["X", "0", "0"],
        ["0", null, "0"],
        ["X", null, "0"]
      ])
    ).toBe("0");
    expect(
      findWinner([
        ["X", null, "0"],
        ["X", "0", null],
        ["X", null, "0"]
      ])
    ).toBe("X");
    expect(
      findWinner([
        ["0", "X", "X"],
        ["0", "0", "0"],
        ["X", null, "X"]
      ])
    ).toBe("0");
    expect(
      findWinner([
        ["0", "X", "X"],
        ["X", null, "X"],
        ["0", "0", "0"]
      ])
    ).toBe("0");
    expect(
      findWinner([
        ["0", "0", "0"],
        ["0", "X", "X"],
        ["X", null, "X"]
      ])
    ).toBe("0");
  });

  test("valid arrays of noughts and crosses with diagonal wins", () => {
    expect(
      findWinner([
        ["0", "X", "X"],
        ["0", "0", "X"],
        ["X", null, "0"]
      ])
    ).toBe("0");
    expect(
      findWinner([
        ["0", "0", "X"],
        ["0", "X", "X"],
        ["X", null, "0"]
      ])
    ).toBe("X");
    expect(
      findWinner([
        ["0", "0", "X"],
        ["0", "X", "0"],
        ["X", "0", "X"]
      ])
    ).toBe("X");
    expect(
      findWinner([
        ["X", "0", "X"],
        ["0", "X", "0"],
        ["0", "0", "X"]
      ])
    ).toBe("X");
  });

  test("valid arrays of 5 x 5 boards", () => {
    expect(
      findWinner([
        ["X", "0", "0", "0", "0"],
        ["X", "X", "X", "X", "X"],
        ["0", "X", "X", "0", "0"],
        ["0", "X", "X", "X", "0"],
        ["X", null, "0", "0", "0"]
      ])
    ).toBe("X");
    expect(
      findWinner([
        ["X", "0", "0", "0", "0"],
        ["X", "X", "X", "0", "X"],
        ["0", "X", "X", "0", "0"],
        ["0", "X", "X", "X", "0"],
        ["X", null, "0", "0", "X"]
      ])
    ).toBe("X");
    expect(
      findWinner([
        ["0", "0", "0", "0", "X"],
        ["0", "X", "X", "0", "0"],
        ["0", "X", "X", "X", "X"],
        ["0", "X", "X", "X", "X"],
        ["0", null, "0", "0", "X"]
      ])
    ).toBe("0");
    expect(
      findWinner([
        ["X", "0", "0", "0", "X"],
        ["0", "X", "X", "0", "0"],
        ["0", "X", "X", "X", "X"],
        ["0", "0", "X", "X", "X"],
        ["0", null, "0", "0", "X"]
      ])
    ).toBe("X");
  });

  test("no winner", () => {
    expect(
      findWinner([
        ["0", null, "X"],
        [null, null, "X"],
        ["X", null, "0"]
      ])
    ).toBe(null);
    expect(
      findWinner([
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ])
    ).toBe(null);
    expect(
      findWinner([
        ["0", "X", "0"],
        ["0", "X", "0"],
        ["X", "0", "X"]
      ])
    ).toBe(null);
  });
});
