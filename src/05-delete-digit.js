/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split('');
  const arrOfVariants = [];
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1);
    arrOfVariants.push(+arr.join(''));
    arr = String(n).split('');
  }
  return Math.max(...arrOfVariants);
}

module.exports = deleteDigit;
