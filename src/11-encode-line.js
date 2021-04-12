/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const newArr = [];
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (arr[i] === arr[i + 1]) {
      counter++;
    } else {
      if (counter === 1) {
        newArr.push(arr[i]);
      }
      if (counter !== 1) {
        newArr.push(`${counter}${arr[i]}`);
        counter = 1;
      }
    }
  }
  return newArr.join('');
}
module.exports = encodeLine;
