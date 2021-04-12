/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortArr = [];
  const newArr = arr.map((item) => {
    if (item === -1) {
      return item;
    }
    sortArr.push(item);
    return '';
  });
  const sortCallBack = function (a, b) {
    return a - b;
  };
  sortArr.sort(sortCallBack);
  let counter = 0;
  const final = newArr.map((item) => {
    if (item === '') {
      counter++;
      return sortArr[counter - 1];
    }
    return item;
  });
  return final;
}

module.exports = sortByHeight;
