export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const next = (nums, n) =>
    nums.indexOf(n) !== -1 && nums[nums.indexOf(n) + 1] !== undefined
      ? nums[nums.indexOf(n) + 1]
      : null;
  return next(nums, n);
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  const count = (str) =>
    str
      .split("")
      .reduce(
        (result, num) =>
          parseInt(num) === 1
            ? { 1: result[1] + 1, 0: result[0] }
            : { 1: result[1], 0: result[0] + 1 },
        { 1: 0, 0: 0 }
      );
  return count(str);
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  const reversed = (n) =>
    parseInt(
      n
        .toString()
        .split("")
        .map((digit, i, arr) => arr[arr.length - 1 - i])
        .join("")
    );
  return reversed(n);
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
