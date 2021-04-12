/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const outputObj = {};
  let arr = 1;
  for (let i = 0; i < domains.length; i++) {
    arr = domains[i].split('.').reverse();
    arr[0] = '.'.concat(arr[0]);
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1]) arr[j + 1] = arr[j].concat('.', arr[j + 1]);
      if (Object.prototype.hasOwnProperty.call(outputObj, arr[j])) {
        outputObj[arr[j]]++;
      } else {
        outputObj[arr[j]] = 1;
      }
    }
  }
  return outputObj;
}

module.exports = getDNSStats;
