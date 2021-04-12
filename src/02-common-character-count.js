/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrS1 = s1.split('');
  const arrS2 = s2.split('');
  let counter = 0;
  for (let i = 0; ((arrS1.length <= arrS2.length) ? i < arrS2.length : i < arrS1.length); i++) {
    if (arrS2.includes(arrS1[i])) {
      arrS2.splice(arrS2.indexOf(arrS1[i]), 1);
      counter += 1;
    }
  }
  return counter;
}

module.exports = getCommonCharacterCount;
