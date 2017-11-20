/** 
 *  @desc 判断日期是否大于当前日期
 *  @param {String} myDate
 *  @return {Boolean}
 * */
function compareDate(myDate) {
  var flag = false
  var currentDate = new Date()
  if (currentDate !== null && myDate !== null) {
    currentDate = currentDate.toLocaleDateString()
    myDate = new Date(myDate).toLocaleDateString()
    var arys1 = currentDate.split('/').length > 1 ? currentDate.split('/') : currentDate.split('-')
    var arys2 = myDate.split('/').length > 1 ? myDate.split('/') : myDate.split('-')
    var n = 0
    flag = false
    while (n < 3) {
      if (Number(arys1[n]) < arys2[n]) {
        flag = true
        break
      }
      n++
    }
  }
  return flag
}

module.exports = compareDate