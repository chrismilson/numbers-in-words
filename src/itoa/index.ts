import { ONE, TEN, POWER, divmod } from './base'

export const MAX_SAFE_NUMBER = 10n ** (BigInt(POWER.length) * 3n) - 1n

const twoDigits = (n: bigint): string[] => {
  if (n === 0n) {
    return []
  }
  const result = []
  if (n < 20) {
    result.push(ONE[Number(n)])
  } else {
    const [t, o] = divmod(n, 10n)
    result.push(TEN[Number(t)])
    if (o > 0) {
      result.push(ONE[Number(o)])
    }
  }
  return ['and', result.join('-')]
}

const threeDigits = (n: bigint): string[] => {
  const [hundreds, remaining] = divmod(n, 100n)
  if (hundreds > 0) {
    return [ONE[Number(hundreds)], 'hundred'].concat(twoDigits(remaining))
  }
  return twoDigits(remaining)
}

const helper = (n: bigint, power: bigint): string[] => {
  if (n === 0n) {
    return []
  }
  const [big, small] = divmod(n, 1000n)
  const result = helper(big, power + 1n).concat(threeDigits(small))
  if (small > 0 && power > 0) {
    result.push(POWER[Number(power)])
  }
  return result
}

const itoa = (n: bigint): string => {
  if (n === 0n) {
    return 'zero'
  }
  const negative = n < 0n
  if (negative) {
    n = -n
  }
  if (n > MAX_SAFE_NUMBER) {
    throw new Error('Number too large to convert.')
  }

  const result = helper(n, 0n)

  if (result[0] === 'and') {
    result.shift()
  }

  return (negative ? 'negative ' : '') + result.join(' ')
}

export default itoa
