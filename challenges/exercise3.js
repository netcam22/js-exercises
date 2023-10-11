export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const numArr = [];
  for (let i = 0; i < nums.length; i++) {
    const smallNum = nums[i];
    if (smallNum < 1) {
      numArr.push(smallNum);
    }
  }
  return numArr;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const nameArr = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i][0] === char) {
      nameArr.push(names[i]);
    }
  }
  return nameArr;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbArr = [];
  for (let i = 0; i < words.length; i++) {
    const wordArr = words[i].split(" ");
    if (wordArr[0] === "to" && wordArr[1] !== null) {
      verbArr.push(words[i]);
    }
  }
  return verbArr;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const intArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      intArr.push(nums[i]);
    }
  }
  return intArr;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  const cities = [];
  for (let i = 0; i < users.length; i++) {
    cities.push(users[i].data.city.displayName);
  }
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const squareRoots = [];
  for (let i = 0; i < nums.length; i++) {
    squareRoots.push(parseFloat(Math.sqrt(nums[i]).toFixed(2)));
  }
  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  const filteredArr = [];
  if (!str) throw new Error("str is required");
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].toLowerCase().includes(str.toLowerCase())) {
      filteredArr.push(sentences[i]);
    }
  }
  return filteredArr;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const longestSides = [];
  for (let i = 0; i < triangles.length; i++) {
    longestSides.push(Math.max(...triangles[i]));
  }
  return longestSides;
}
