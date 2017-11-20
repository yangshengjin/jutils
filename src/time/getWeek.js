/** 获取一周的星期几
 * @param {Date|String} day
 * @return {String} weekDay
 */
function getWeek(day) {
  var weekDay = ''
  var toDate = new Date()
  if (day != null) {
    if (typeof day.valueOf() !== Number) {
      day = new Date(day)
    }
    if (day.getDate() === toDate.getDate() && day.getMonth() === toDate.getMonth() && day.getFullYear() === toDate.getFullYear()) {
      weekDay = '今天'
    } else {
      switch (day.getUTCDay()) {
        case 0: weekDay = '周日'
          break
        case 1: weekDay = '周一'
          break
        case 2: weekDay = '周二'
          break
        case 3: weekDay = '周三'
          break
        case 4: weekDay = '周四'
          break
        case 5: weekDay = '周五'
          break
        case 6: weekDay = '周六'
          break
      }
    }
  }
  return weekDay
}

module.exports = getWeek