const oddPositions = [1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 2, 4, 18, 20, 11, 3, 6, 8, 12, 14, 16, 10, 22, 25, 24, 23, 27, 28, 26]
const evenPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]

const common = require('./common')

const randomItIban = function (bankCode) {
  return buildItIban(
    bankCode,
    common.randomNumericString(5),
    common.randomNumericString(12)
  )
}

const buildItIban = function (bankCode, branchCode, account) {
  const bban = cinCode(bankCode, branchCode, account) + bankCode + branchCode + account

  return 'IT' + common.ibanChecksum(bban, 'IT') + bban
}

const cinCode = function (bankCode, branchCode, account) {
  const bban = bankCode + branchCode + account

  let weightSum = 0

  for (let i = 0; i < bban.length; i++) {
    const position = i + 1
    const ch = bban[i]

    if (position % 2 === 0) {
      weightSum += evenPositions[parseInt(ch)]
    } else {
      weightSum += oddPositions[parseInt(ch)]
    }
  }

  const remainder = weightSum % 26

  return String.fromCharCode(remainder + 65)
}

module.exports.randomItIban = randomItIban
module.exports.buildItIban = buildItIban
module.exports.cinCode = cinCode
