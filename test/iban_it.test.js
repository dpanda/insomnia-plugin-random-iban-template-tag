/* eslint-disable no-undef */
const ibanIt = require('../src/iban_it')

test('calculate cin code', () => {
  expect(ibanIt.cinCode('08901', '33930', '000000008501')).toBe('I')
})

test('build full it iban test', () => {
  expect(ibanIt.buildItIban('08901', '33930', '000000008501')).toBe('IT54I0890133930000000008501')
})

test('random it iban test', () => {
  expect(ibanIt.randomItIban('08901').length).toBe(27)
})
