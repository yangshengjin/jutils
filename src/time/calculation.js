/** 计算前后天日期 -> TODO: 参数myDate为日期；type为前后天类型；前天为last，后天为next
 *  calculation() returns a new dateValue
 *  @behavior calculation next day and last day
 *  @param {String} myDate
 *  @param {String} type -> TODO: type is 'last' or 'next'
 *  @return {String} dateValue
 * */
const inArray = require('../array/inArray')
function calculation(myDate, type) {
  myDate = new Date(myDate)
  var day30 = [4, 6, 9, 11]
  var day31 = [1, 3, 5, 7, 8, 10, 12]
  var year = myDate.getFullYear()
  var month = myDate.getMonth() + 1
  var day = myDate.getDate()
  // 前一天;
  if (type === 'last') {
    day = day - 1
    if (day === 0) {
      month = month - 1
      if (month === 0) {
        month = 12
        year = year - 1
      }
      if (inArray(day31, parseInt(month))) {
        day = 31
      } else if (inArray(day30, parseInt(month))) {
        day = 30
      } else {
        if ((parseInt(year) % 4 === 0 && parseInt(year) % 100 !== 0) || parseInt(year) % 400 === 0) {
          day = 29 // 闰年
        } else {
          day = 28 // 平年
        }
      }
    }
  }
  // 后一天;
  if (type === 'next') {
    day = day + 1
    if (inArray(day31, parseInt(month))) {
      if (day === 32) {
        day = 1
        month = month + 1
        if (month === 13) {
          month = 1
          year = year + 1
        }
      }
    } else if (inArray(day30, parseInt(month))) {
      if (day === 31) {
        day = 1
        month = month + 1
      }
    } else {
      if ((parseInt(year) % 4 === 0 && parseInt(year) % 100 !== 0) || parseInt(year) % 400 === 0) {
        if (day === 30) {
          day = 1
          month = month + 1
        }
      } else {
        if (day === 29) {
          day = 1
          month = month + 1
        }
      }
    }
  }
  day = day < 10 ? '0' + day : day
  month = month < 10 ? '0' + month : month
  var dateValue = year + '-' + month + '-' + day
  return dateValue
}

module.exports = calculation