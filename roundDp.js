/**
 * Rounds numbers by the desired number of decimal places.
 * @param {number} num - Number
 * @param {number} [dp=0] Decimal places (0 by default)
 * ```js
 * roundDp(234.07, 1) // 234.1
 * ```
 * @returns Rounded number
 */
const roundDp = (num, dp = 0) => {
  if (typeof num !== 'number' || typeof dp !== 'number')
    throw new Error('Both arguments must be numbers.')
  if (dp < 0) throw new Error('Decimal places must bt at least 0.')

  let numStr = num.toString().split('')
  let pointPosition = numStr.indexOf('.')
  if (pointPosition === -1) return num
  let lookFor = pointPosition + dp + 1

  if (numStr[lookFor] >= 5) {
    let changeIndex = dp > 0 ? lookFor - 1 : lookFor - 2
    numStr[changeIndex] = (parseInt(numStr[changeIndex]) + 1).toString()
  }

  let returnStr = numStr.slice(0, lookFor).join('')
  if (returnStr.endsWith('.'))
    returnStr = returnStr.slice(0, returnStr.length - 1)
  return parseFloat(returnStr)
}

module.exports = roundDp
