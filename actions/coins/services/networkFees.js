const axios = require('axios')

const endpoint = `${require('../../../constants/api')}/coins/tx/fees`

/**
 * Find the current estimate high, medium and low for the network
 *
 * @param params = {
      {String} network - coin network
      {String} testnet - if is testnet network
 * }
 *
 * @returns values in coin lowest unit
      network:
      data: {
        high:
        medium:
        low:
      }
 */
module.exports = async params => {
  let url = `${endpoint}/${params.network}/?testnet=${params.testnet}`
  try {
    const res = await axios.get(url)
    if (res) {
      return res.data
    }
    return 0
  } catch (err) {
    throw err.response ? err.response.data : new Error(err)
  }
}
