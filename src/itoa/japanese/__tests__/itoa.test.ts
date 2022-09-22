import itoa from '..'

it.each([
  [1, 'いち'],
  [10, 'じゅう'],
  [13, 'じゅうさん'],
  [101, 'ひゃくいち'],
  [1000000, 'ひゃくまん'],
  [
    398623123986,
    'さんぜん きゅうひゃく はちじゅう ろくおく にせん さんびゃく じゅう にまん さんぜん きゅうひゃく はちじゅう ろく'
  ],
  [800, 'はっぴゃく'],
  [300, 'さんびゃく'],
  [8000, 'はっせん'],
  [3000, 'さんぜん']
])('Gives the right string for each number', (number, words) => {
  expect(itoa(BigInt(number))).toBe(words)
})
