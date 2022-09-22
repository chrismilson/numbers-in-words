export const SMALL = [
  '',
  'いち',
  'に',
  'さん',
  'よん',
  'ご',
  'ろく',
  'なな',
  'はち',
  'きゅう'
]

export const LARGE = [
  '',
  'まん',
  'おく',
  'ちょう',
  'けい',
  'がい',
  'じょ',
  'こう',
  'かん',
  'せい',
  'さい',
  'ごく',
  'ごうがしゃ',
  'あそうぎ',
  'なゆた',
  'ふかしぎ',
  'むりょうたいそう'
]

/**
 * A python style divmod method.
 *
 * @param n The numberator in the division
 * @param d The denominator in the division
 */
export const divmod = (n: bigint, d: bigint) => [n / d, n % d]
