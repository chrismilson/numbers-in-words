import { ONE, TEN, POWER, divmod } from './base'

const twoDigits = (n: number): string[] => {
  if (n === 0) {
    return []
  }
  const result = []
  if (n < 20) {
    result.push(ONE[n])
  } else {
    const [t, o] = divmod(n, 10)
    result.push(TEN[t])
    if (o > 0) {
      result.push(ONE[o])
    }
  }
  return ['and', result.join('-')]
}

const threeDigits = (n: number): string[] => {
  const [hundreds, remaining] = divmod(n, 100)
  if (hundreds > 0) {
    return [ONE[hundreds], 'hundred'].concat(twoDigits(remaining))
  }
  return twoDigits(remaining)
}

const helper = (n: number, power: number): string[] => {
  if (n === 0) {
    return []
  }
  const [big, small] = divmod(n, 1000)
  const result = helper(big, power + 1).concat(threeDigits(small))
  if (small > 0 && power > 0) {
    result.push(POWER[power])
  }
  return result
}

const itoa = (n: number): string => {
  if (n === 0) {
    return 'zero'
  }
  if (n >= Math.pow(10, POWER.length * 3)) {
    throw new Error('Number too large to convert.')
  }
  const result = helper(n, 0)
  if (result[0] === 'and') {
    result.shift()
  }
  return result.join(' ')
}

export default itoa
