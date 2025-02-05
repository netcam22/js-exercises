export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map((num) => Math.pow(num, 2));
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words
    .map((word) => word.toLowerCase())
    .reduce(
      (accumulator, word) =>
        `${accumulator}${word[0].toUpperCase()}${word.substring(
          1,
          word.length
        )}`
    );
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  return people.flatMap((person) => person.subjects).length;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  return menu.flatMap((recipe) => recipe.ingredients).includes(ingredient);
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  return [
    ...new Set(
      arr1.filter((number) => arr2.includes(number)).sort((a, b) => a - b)
    ),
  ];
}
