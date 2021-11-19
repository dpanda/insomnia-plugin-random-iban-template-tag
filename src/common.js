const crypto = require('crypto')

const ibanChecksum = function (bban, countryCode) {
  const checkString = bban + countryCode + '00'
  let checkStringValues = ''

  for (let i = 0; i < checkString.length; i++) {
    const char = checkString[i]
    const charCode = char.charCodeAt(0)
    if (charCode >= 65 && charCode <= 90) {
      checkStringValues += charCode - 55 // A=10, B=11, ...
    } else {
      checkStringValues += char
    }
  }

  const remainder = modLargeNumbers(checkStringValues, 97)

  const checkSum = 98 - remainder

  return checkSum < 10 ? '0' + checkSum : '' + checkSum
}

const modLargeNumbers = function (divident, divisor) {
  return Number(BigInt(divident) % BigInt(divisor))
}

const alpha = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'

const randomString = function (length, allowedChars) {
  return Array.from(crypto.randomBytes(length)).map(n => allowedChars[n % allowedChars.length]).join('').toUpperCase()
}

const randomNumericString = function (length) {
  return randomString(length, numbers)
}

const randomAlphanumericString = function (length) {
  return randomString(length, alpha + numbers)
}

module.exports.ibanChecksum = ibanChecksum
module.exports.modLargeNumbers = modLargeNumbers
module.exports.randomString = randomString
module.exports.randomNumericString = randomNumericString
module.exports.randomAlphanumericString = randomAlphanumericString
