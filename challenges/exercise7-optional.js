/* 
	👉 These exercises are a quick practice of some modern JavaScript features.
*/

export function printColours(colours) {
  if (!colours) throw new Error("colour is required");
  return [...colours];
}

export function shoppingList(list, newItem) {
  if (!list) throw new Error("list is required");
  if (!newItem) throw new Error("newItem is required");
  return [...list, ...newItem];
}

export function highestNumber(numbers) {
  if (!numbers) throw new Error("numbers are required");
  return Math.max(...numbers);
}

export function splitThatString(string) {
  if (!string) throw new Error("string is required");
  return [...string];
}

// Optional Chaining Bonus activity!

export function addressLookUp(user) {
  if (!user) throw new Error("user is required");
  const { address } = user;
  if (address === undefined) return address;
  const {
    address: { postcode },
  } = user;
  return postcode;
}
