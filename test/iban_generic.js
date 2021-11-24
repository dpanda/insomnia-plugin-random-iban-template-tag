/* eslint-disable no-undef */
const ibanGeneric = require('../src/iban_generic')

test('genericiban test', () => {
  expect(ibanGeneric.randomIban('CH').length).toBe(21)
})
