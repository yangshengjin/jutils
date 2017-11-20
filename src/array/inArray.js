/**
 * @desc 判断某一值是否存在某个数组里
 * @param { Array } array
 * @param { String/Number } value
 * @return { Boolean }
 */
function inArray(array, value) {
  for (var i in array) {
    if (array[i] === value) return true
  }
  return false
}

module.exports = inArray