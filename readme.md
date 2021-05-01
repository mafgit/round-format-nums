# Round and format numbers

[![NPM](https://img.shields.io/npm/dt/round-format-nums?style=for-the-badge)](https://www.npmjs.com/package/round-format-nums)
[![NPM](https://img.shields.io/npm/v/round-format-nums?style=for-the-badge)](https://www.npmjs.com/package/round-format-nums)
[![NPM](https://img.shields.io/npm/l/round-format-nums?style=for-the-badge)](https://www.npmjs.com/package/round-format-nums)
[![NPM](https://img.shields.io/bundlephobia/min/round-format-nums?style=for-the-badge)](https://www.npmjs.com/package/round-format-nums)


## Installation
```bash
npm i round-format-nums
```

## Importing
```js
const { roundDp, formatNumUnit } = require('round-format-nums')
```

## roundDp(number, decimalPlaces)
```js
// Examples
roundDp(234.07, 1) // 234.1
roundDp(23.9, 0) // 24
roundDp(23.9) // 24
```
Default for decimalPlaces is 0

## formatNumUnit(number, decimalPlaces, [config])
It places a unit at the end of number such as 1000 becomes '1K', you can change these configurations in the config argument which is an array of objects.

```js
// default config
[
  { symbol: 'K', minDigits: 4, maxDigits: 6 },
  { symbol: 'M', minDigits: 7, maxDigits: 9 },
  { symbol: 'B', minDigits: 10, maxDigits: Infinity },
]
```
#### Explanation of `{ symbol: 'K', minDigits: 4, maxDigits: 6 }`:

Numbers from 1000 (4 digits) to 999999 (6 digits) will be divided by 1000 and rounded off to your desired decimal places, and 'K' will be placed at the end.

#### Explanation of `{ symbol: 'M', minDigits: 7, maxDigits: 9 }`:

Numbers from 1000000 (7 digits) to 999999999 (9 digits) will be divided by 1000000 (A million) and rounded off to your desired decimal places, and 'M' will be placed at the end.

`maxDigits: Infinity` means any amount of digits above the minDigits
```js
// Example
formatNumUnit(12345, 2) // 12.35K according to the default config
```