export function findMax(numArray) {
  if (numArray === undefined) throw new Error("numArray is required");
  if (!Array.isArray(numArray))
    throw new Error("parameter data type should be Array");
  return `The maximum value is ${Math.max(...numArray)}`;
}
