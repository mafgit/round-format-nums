const roundDp = require('./roundDp')

const defaultConfig = [
  { symbol: 'K', minDigits: 4, maxDigits: 6 },
  { symbol: 'M', minDigits: 7, maxDigits: 9 },
  { symbol: 'B', minDigits: 10, maxDigits: Infinity },
]

/**
 * Formats and rounds a number, and places a unit at the end if needed.
 * @param {number} n - Number
 * @param {number} dp - Decimal places
 * @param {{}[]} config - Array of option objects
 * @example
 * ```js
 * { symbol: 'K', minDigits: 4, maxDigits: 6 }
 * // e.g formatNumUnit(12345, 2) --> 12.35K
 * ```
 * @returns Formatted and rounded number.
 */
const formatNumUnit = (n, dp, config = defaultConfig) => {
  if (typeof n !== 'number' || typeof dp !== 'number')
    throw new Error('Both arguments must be numbers.')
  if (dp < 0) throw new Error('Decimal places must be 0 or greater.')

  let nStr = n.toString().split('')
  let pointPos = nStr.indexOf('.')
  let len

  if (pointPos === -1) len = nStr.length
  else len = pointPos

  let chosenOption

  config.forEach((option) => {
    if (option.minDigits < 0 || option.maxDigits < 0)
      throw new Error('minDigits and maxDigits must be 0 or greater.')
    if (len >= option.minDigits && len <= option.maxDigits)
      chosenOption = option
  })

  if (!chosenOption) return n

  let repeatTimes =
    chosenOption.minDigits - 1 < 0 ? 0 : chosenOption.minDigits - 1
  let divBy = parseInt('1' + '0'.repeat(repeatTimes))

  return roundDp(n / divBy, dp) + chosenOption.symbol
}

module.exports = formatNumUnit
