/* eslint-disable no-undef */
const common = require('../src/common')

test('checksum test', () => {
  expect(common.ibanChecksum('0024724714872340Q', 'CH')).toBe('44')
  expect(common.ibanChecksum('I0890133930000000008501', 'IT')).toBe('54')
  expect(common.ibanChecksum('500105176765129173', 'DE')).toBe('77')
})

test('mod_large_numbers test', () => {
  expect(common.modLargeNumbers('180890133930000000008501182900', 97)).toBe(44)
})

test('random string test', () => {
  expect(common.randomString(5, '01234')).toMatch(/[0-4]{5}/)
})
