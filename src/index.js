/**
 * webpack 打包入口文件
 */
const arrayEqual = require('./array/arrayEqual')
const inArray = require('./array/inArray')
const compareDate = require('./time/compareDate')
const calculation = require('./time/calculation')
const getWeek = require('./time/getWeek')
const getDayToString = require('./time/getDayToString')

module.exports = {
  arrayEqual,
  inArray,
  compareDate,
  calculation,
  getWeek,
  getDayToString
}
