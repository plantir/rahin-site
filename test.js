let arr = [
  {
    title: 'Object Category 1',
    Key: '1',
    Disabled: false,
    Children: []
  }
]

let stringify = JSON.stringify(arr)
console.log(JSON.parse(stringify))
