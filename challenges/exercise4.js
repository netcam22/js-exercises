export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  return nums.indexOf(n) !== -1 && nums[nums.indexOf(n) + 1] !== undefined
    ? nums[nums.indexOf(n) + 1]
    : null;
};

export const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  return str.split("").reduce(
    (result, num) => {
      result[num] += 1;
      return result;
    },
    { 1: 0, 0: 0 }
  );
};

export const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return parseInt(
    n
      .toString()
      .split("")
      .map((digit, i, arr) => arr[arr.length - 1 - i])
      .join("")
  );
};

export const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let total = 0;
  arrs.map(subArr => subArr.map(num => (total += num)));
  return total;
};

export const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  for (let key in haystack) {
    if (
      typeof haystack[key] === "string" &&
      haystack[key].toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return true;
    }
  }
  return false;
};

export const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
