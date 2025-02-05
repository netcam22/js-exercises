/* 
	👉 These exercises are a great extra challenge to push your JavaScript skills. Go for it!
*/

/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * Considers a minus symbol in a negative number not related to the first digit, ie. -111 will return 3
 * @param {Number} n
 */
export const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  if (!Number.isInteger(n))
    throw new Error("n should be integer of datatype number");
  return n
    .toString()
    .replace(/-{1}/, "")
    .split("")
    .reduce((sum, num) => (sum += parseInt(num)), 0);
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
export const createRange = (start, end, step) => {
  if (start === undefined && end === undefined)
    throw new Error("start and end are required");
  if (end === undefined) throw new Error("end is required");
  if (step === undefined) step = 1;
  const arrLen = (end - start) / step + 1;
  return Array.from({ length: arrLen }, (item, i) => i * step + start);
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
export const getScreentimeAlertList = (users, date) => {
  if (users === undefined || !Array.isArray(users))
    throw new Error("array of users is required");
  if (date === undefined || typeof date !== "string")
    throw new Error("date is required");
  const data = users
    .map(user => {
      const usageObj = user.screenTime.find(
        screenUse => screenUse.date === date
      );
      let count = 0;
      if (usageObj !== undefined) {
        count = Object.keys(usageObj.usage).reduce(
          (accumulator, key) => accumulator + usageObj.usage[key],
          0
        );
      }
      if (count > 100) {
        return user.username;
      }
    })
    .filter(foundUser => foundUser !== undefined);
  return data;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
export const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (typeof hexStr !== "string")
    throw new Error("parameter data type should be String");
  if (!/^#{1}[0-9A-F]{6}$/gi.test(hexStr))
    throw new Error("invalid hex string");
  const [a, b, c, d, e, f] = hexStr.replace("#", "").split("");
  const hexArr = [`${a}${b}`, `${c}${d}`, `${e}${f}`];
  const decArr = hexArr.map(hex => parseInt(hex, 16));
  const [x, y, z] = decArr;
  return `rgb(${x},${y},${z})`;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * Function is based on concept of grid based on x,y co-ordinates, mapping matching "X"s and "O"s with 
  positions as follows:
  00 01 02
  10 11 12
  20 21 22
  Either three x values of 0, 1, or 2 will be a column of 3, or 3 y values of 3, 4 or 5 will be a row of 3
  A string of co-ordinates made of the x and y values will check for special cases for diagonals
 * @param {Array} board
 */
export const findWinner = board => {
  if (board === undefined) throw new Error("board is required");

  // not necessary for get winner but might be useful to extend function and map current state
  function getPlayerCoordinates(player, board) {
    return board.map((row, x, board) =>
      row
        .map((square, y, board) =>
          square !== null && square === player ? `${x}${y}` : ""
        )
        .filter(coordinates => coordinates !== "")
    );
  }
  // not necessary for get winner but might be useful to extend function and map curent state
  function getBoardMap(board) {
    return board.map((row, x) => row.map((square, y) => `${x}${y}`));
  }

  function diagonalCount(player, board) {
    const count = {},
      len = board.length;
    for (let i = 0; i < len; i++) {
      const diagonals = [board[i][i], board[i][len - i - 1]];
      for (let index in diagonals) {
        if (diagonals[index] !== null && diagonals[index] === player) {
          count[index] === undefined ? (count[index] = 1) : (count[index] += 1);
        }
      }
    }
    return count;
  }

  function rowCount(player, board) {
    const count = {},
      len = board.length;
    for (const y in board) {
      for (const x in board[y]) {
        const square = board[y][x];
        if (square !== null && square === player) {
          count[x] === undefined ? (count[x] = 1) : (count[x] += 1);
          count[parseInt(y) + len] === undefined
            ? (count[parseInt(y) + len] = 1)
            : (count[parseInt(y) + len] += 1);
        }
      }
    }
    return count;
  }

  function hasRowOfBoardLen(count, len) {
    const found = Object.keys(count).find(key => count[key] === len);
    if (count[found] === undefined) return false;
    return count[found] === len;
  }

  function hasWon(player, board) {
    return hasRowOfBoardLen(diagonalCount(player, board), board.length) ||
      hasRowOfBoardLen(rowCount(player, board), board.length)
      ? true
      : false;
  }

  const players = ["X", "0"];
  const winner = players.find(player => hasWon(player, board));
  return winner === undefined ? null : winner;
};
