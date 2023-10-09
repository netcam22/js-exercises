export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester";
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people / 40);
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  return arr.reduce(
    (count, animal) => (animal === "sheep" ? count + 1 : count),
    0
  );
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  return /M{1}\d+/.test(person.address.postCode);
}
