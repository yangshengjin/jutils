/** 将日期对象转换为字符串
 *  @param {Date | String} dateObj
 *  @param {String} format
 *  @return {String}
 */
function getDayToString(dateObj, format) {
  if (typeof format === 'string') {
    format = format.toLocaleLowerCase()
  } else {
    format = 'yyyy-mm-dd hh:ii'
  }
  if (typeof dateObj === 'string') {
    dateObj = new Date(dateObj)
  }
  var year = dateObj.getFullYear()
  var month = (dateObj.getMonth() + 1) >= 10 ? (dateObj.getMonth() + 1) : '0' + (dateObj.getMonth() + 1)
  var day = dateObj.getDate() >= 10 ? dateObj.getDate() : '0' + dateObj.getDate()
  var hh = dateObj.getHours() >= 10 ? dateObj.getHours() : '0' + dateObj.getHours()
  var ii = dateObj.getMinutes() >= 10 ? dateObj.getMinutes() : '0' + dateObj.getMinutes()
  var ss = dateObj.getSeconds() >= 10 ? dateObj.getSeconds() : '0' + dateObj.getSeconds()
  var returnDay = ''
  switch (format) {
    case 'yyyy-mm-dd':
      returnDay = year + '-' + month + '-' + day
      break
    case 'yyyy-mm-dd hh:ii':
      returnDay = year + '-' + month + '-' + day + ' ' + hh + ':' + ii
      break
    case 'yyyy-mm-dd hh:ii:ss':
      returnDay = year + '-' + month + '-' + day + ' ' + hh + ':' + ii + ':' + ss
      break
    default:
      returnDay = year + '-' + month + '-' + day + ' ' + hh + ':' + ii
      break
  }
  return returnDay
}

module.exports = getDayToString