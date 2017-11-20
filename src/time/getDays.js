/**获取日期
 * @param {Date|String}
 * @return {Object} 
 */
const getWeek = require('./getWeek')
const calculation = require('./calculation')

function getDays(d) {
  var newDate = new Date()
  if (typeof d === 'string') {
    newDate = new Date(d)
  }
  var year = newDate.getFullYear()
  var month = newDate.getMonth() + 1
  var firstDay = '01'

  var currentDay = newDate.getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (currentDay < 10) {
    currentDay = '0' + currentDay
  }
  var initFromDate = year + '-' + month + '-' + firstDay
  var initToDate = year + '-' + month + '-' + currentDay
  var tomorrow = calculation(initToDate, 'next')
  return {
    first: initFromDate,   // 返回该月的1号日期
    current: initToDate,  // 返回今天
    year: year, // 返回今年
    month: month, // 返回今月
    day: currentDay, // 返回今天日期
    week: getWeek(initToDate), // 返回今天的星期几
    tomorrow: tomorrow// 返回明天
  }
}

module.exports = getDays