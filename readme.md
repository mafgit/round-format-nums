# Round and format numbers
## Installation
```bash
npm i round-format-nums
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
So, 'K' is placed if the number provided is of 4 digits and below 7 digits (excluding the digits after the decimal)
```js
// Example
formatNumUnit(12345, 2) // 12.35K according to the default config
```