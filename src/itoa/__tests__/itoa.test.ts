import itoa from '..'

it.each([
  [1, 'one'],
  [10, 'ten'],
  [13, 'thirteen'],
  [101, 'one hundred and one'],
  [1000000, 'one million'],
  [
    398623123986,
    'three hundred and ninety-eight billion six hundred and twenty-three million one hundred and twenty-three thousand nine hundred and eighty-six'
  ]
])('Gives the right string for each number', (number, words) => {
  expect(itoa(BigInt(number))).toBe(words)
})
