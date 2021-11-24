const common = require('./common')

const ibanLengths = {
  AD: 20,
  AT: 16,
  CH: 17,
  CZ: 20,
  CY: 24,
  DE: 18,
  DK: 14,
  EE: 16,
  FI: 14,
  GB: 18,
  GI: 19,
  GR: 23,
  HR: 17,
  HU: 24,
  IE: 18,
  IS: 22,
  LI: 17,
  LU: 16,
  LT: 16,
  PL: 24,
  RO: 20,
  SE: 20,
  SK: 20,
  VA: 18
}

const randomIban = function (country) {
  const bban = common.randomNumericString(ibanLengths[country])
  return country + common.ibanChecksum(bban, country) + bban
}

module.exports.randomIban = randomIban
