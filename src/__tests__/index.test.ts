import * as wxml from '..'

test('should export node types', function () {
  expect(wxml.NODE_TYPES.ELEMENT).toBe(1)
  expect(wxml.NODE_TYPES.TEXT).toBe(3)
  expect(wxml.NODE_TYPES.COMMENT).toBe(8)
})
