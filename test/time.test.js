const assert = require('power-assert')
const expect = require('chai').expect
const jutils = require('../dist/jutils.min.js')
describe('Time API:', function () {
  describe('#calculation()', function () {
    it(`jutils.calculation(2017-11-20,last) should return 2017-11-19`, function () {
      assert(jutils.calculation('2017-11-20', 'last') === '2017-11-19')
    })
    it(`jutils.calculation(2017-11-01,last) should return 2017-10-31`, function () {
      assert(jutils.calculation('2017-11-01', 'last') === '2017-10-31')
    })
    it(`jutils.calculation(2017-11-20,next) should return 2017-11-21`, function () {
      assert(jutils.calculation('2017-11-20', 'next') === '2017-11-21')
    })
    it(`jutils.calculation(2017-11-30,next) should return 2017-12-01`, function () {
      assert(jutils.calculation('2017-11-30', 'next') === '2017-12-01')
    })
  })

  describe('#compareDate()', function () {
    it(`jutils.compareDate(2017-11-20) should return false`, function () {
      assert.notEqual(jutils.compareDate('2017-11-20'))
    })
    it(`jutils.compareDate(2017-11-01) should return false`, function () {
      assert.notEqual(jutils.compareDate('2016-11-01'))
    })
    it(`jutils.compareDate(2017-11-22) should return true`, function () {
      assert(jutils.compareDate('2017-11-22'))
    })
    it(`jutils.compareDate(2018-11-30) should return true`, function () {
      assert(jutils.compareDate('2018-11-30'))
    })
  })

  describe('#getDayToString()', function () {
    it(`jutils.getDayToString(2017-11-20 18:10:50, 'yyyy-mm-dd') should return 2017-11-20`, function () {
      assert(jutils.getDayToString('2017-11-20 18:10:50', 'yyyy-mm-dd') === '2017-11-20')
    })
    it(`jutils.getDayToString(2017-11-20 18:10:50, 'yyyy-mm-dd hh:ii') should return 2017-11-20 18:10`, function () {
      assert(jutils.getDayToString('2017-11-20 18:10:50', 'yyyy-mm-dd hh:ii') === '2017-11-20 18:10')
    })
    it(`jutils.getDayToString(2017-11-20 18:10:50, 'yyyy-mm-dd hh:ii:ss') should return 2017-11-20 18:10:50`, function () {
      assert(jutils.getDayToString('2017-11-20 18:10:50', 'yyyy-mm-dd hh:ii:ss') === '2017-11-20 18:10:50')
    })
    it(`jutils.getDayToString(2017-11-20 18:10:50) should return 2017-11-20 18:10`, function () {
      assert(jutils.getDayToString('2017-11-20 18:10:50') === '2017-11-20 18:10')
    })
    let dateObj = new Date()
    var year = dateObj.getFullYear()
    var month = (dateObj.getMonth() + 1) >= 10 ? (dateObj.getMonth() + 1) : '0' + (dateObj.getMonth() + 1)
    var day = dateObj.getDate() >= 10 ? dateObj.getDate() : '0' + dateObj.getDate()
    var getDay = `${year}-${month}-${day}`
    it(`jutils.getDayToString(${dateObj}, 'yyyy-mm-dd') should return ${getDay}`, function () {
      assert(jutils.getDayToString(dateObj, 'yyyy-mm-dd') === getDay)
    })
  })
})