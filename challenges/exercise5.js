/* 
⚠️
⚠️ See exercise5.md - this time you have to write your own tests! ⚠️
⚠️
*/

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = arr => {
  if (arr === undefined) throw new Error("parameter arr is required");
  if (!Array.isArray(arr))
    throw new Error("parameter data type should be Array");
  return arr.reduce(
    (sum, num) => (num % 3 === 0 || num % 5 === 0 ? (sum += num) : sum),
    0
  );
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = str => {
  if (str === undefined) throw new Error("parameter str is required");
  if (typeof str !== "string")
    throw new Error("parameter data type should be String");
  return /^[ACTG]+$/g.test(str);
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("parameter str is required");
  if (typeof str !== "string")
    throw new Error("parameter data type should be String");
  if (!/^[ACTG]+$/g.test(str)) throw new Error("invalid DNA string");
  const pairs = { A: "T", T: "A", C: "G", G: "C" };
  return str
    .split("")
    .map(char => pairs[char], pairs)
    .join("");
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = n => {
  if (n === undefined) throw new Error("parameter n is required");
  if (n < 0) throw new Error("parameter should be positive");
  if (!Number.isInteger(n))
    throw new Error("parameter should be integer of datatype number");
  if (n <= 1) return false;
  for (let k = 2; k <= Math.sqrt(n); k++) {
    if (n % k === 0) {
      return false;
    }
  }
  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (n, fill) => {
  if (n === undefined && fill === undefined)
    throw new Error("no parameters passed");
  if (n === undefined || !Number.isInteger(n))
    throw new Error("n is required of integer data type number");
  if (fill === undefined) throw new Error("fill is required");
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n).fill(fill);
  }
  return arr;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */

export const areWeCovered = (staff, day) => {
  if (staff === undefined && day === undefined)
    throw new Error("staff and day are required");
  if (staff === undefined || !Array.isArray(staff))
    throw new Error("staff is required");
  if (day === undefined || typeof day !== "string")
    throw new Error("day is required");
  return (
    staff.reduce((count, person) => {
      if (person.rota.includes(day)) {
        return count === undefined ? (count = 1) : (count += 1);
      }
      return count;
    }, 0) >= 3
  );
};
