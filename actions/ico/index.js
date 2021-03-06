const buyCoin = require('./buyCoin')
const buyConversion = require('./buyConversion')
const buyBalance = require('./buyBalance')
const buyHistory = require('./buyHistory')
const coinAmount = require('./coinAmount')
const confirmTerm = require('./confirmTerm')
const obtainPhase = require('./obtainPhase')
const sendUserBalance = require('./sendUserBalance')
const verifyUserWithdraw = require('./verifyUserWithdraw')

module.exports = {
  buyCoin,
  buyConversion,
  buyHistory,
  coinAmount,
  confirmTerm,
  obtainPhase,
  buyBalance,
  sendUserBalance,
  verifyUserWithdraw
}
