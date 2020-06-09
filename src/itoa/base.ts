export const ONE = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'
]

export const TEN = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety'
]

export const POWER = ['', 'thousand', 'million', 'billion', 'trillion']

/**
 * A python style divmod method.
 *
 * @param n The numberator in the division
 * @param d The denominator in the division
 */
export const divmod = (n: number, d: number) => [Math.floor(n / d), n % d]
