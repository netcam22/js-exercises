export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const numArr = [];
  nums.forEach(function (num) {
    if (num < 1) {
      numArr.push(num);
    }
  });
  return numArr;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const nameArr = [];
  names.forEach(function (name) {
    if (name[0] === char) {
      nameArr.push(name);
    }
  });
  return nameArr;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbArr = [];
  words.forEach(function (word) {
    const wordArr = word.split(" ");
    if (wordArr[0] === "to" && wordArr[1] !== null) {
      verbArr.push(word);
    }
  });
  return verbArr;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const intArr = [];
  nums.forEach(function (num) {
    if (Number.isInteger(num)) {
      intArr.push(num);
    }
  });
  return intArr;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  const cities = [];
  users.forEach(function (user) {
    cities.push(user.data.city.displayName);
  });
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const squareRoots = [];
  nums.forEach(function (num) {
    squareRoots.push(parseFloat(Math.sqrt(num).toFixed(2)));
  });
  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  const filteredArr = [];
  if (!str) throw new Error("str is required");
  sentences.forEach(function (sentence) {
    if (sentence.toLowerCase().includes(str.toLowerCase())) {
      filteredArr.push(sentence);
    }
  });
  return filteredArr;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const longestSides = [];
  triangles.forEach(function (triangle) {
    longestSides.push(Math.max(...triangle));
  });
  return longestSides;
}
