describe('Array API:', function () {
  describe('#arrayEqual()', function () {
    it(`jutils.arrayEqual([0,2,3],[1,2,3]) should return false`, function () {
      assert.notEqual(jutils.arrayEqual([0, 2, 3], [1, 2, 3]))
    })
    it('jutils.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
      assert(jutils.arrayEqual([1, 2, 3], [1, 2, 3]))
    })
    let arr = [8, 2, 3, 4, 7, 8]
    it(`jutils.arrayEqual([${arr},${arr}]) should return true`, function () {
      assert(jutils.arrayEqual(arr, arr))
    })
  })

  describe('#inArray()', function () {
    it(`jutils.inArray([1,2,3], 4) should return false`, function () {
      assert.notEqual(jutils.inArray([1, 2, 3], 4))
    })
    it(`jutils.inArray([1,2,3], 1) should return true`, function () {
      assert(jutils.inArray([1, 2, 3], 1))
    })
    it(`jutils.inArray([1,2,3], 3) should return true`, function () {
      assert(jutils.inArray([1, 2, 3], 3))
    })
  })
})