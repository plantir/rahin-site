const _ = require('lodash')
let array = [
  13,
  24,
  10,
  15,
  21,
  14,
  20,
  1,
  19,
  30,
  42,
  48,
  35,
  41,
  59,
  53,
  28,
  46,
  52,
  57,
  26,
  32,
  44,
  56,
  31,
  49,
  55
]
let new_arr = _.orderBy(array)
console.log(new_arr)
