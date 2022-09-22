import { SMALL, LARGE, divmod } from './base'

export const MAX_SAFE_NUMBER = 10n ** (BigInt(LARGE.length) * 4n) - 1n

const fourDigits = (n: bigint): string[] => {
  if (n === 0n) {
    return []
  }

  const result = []

  const [thousands, remainingThousands] = divmod(n, 1000n)
  const [hundreds, remainingHundreds] = divmod(remainingThousands, 100n)
  const [tens, ones] = divmod(remainingHundreds, 10n)

  // thousands
  if (thousands > 0n) {
    const digit = []
    digit.push(SMALL[Number(thousands)])
    if (thousands === 1n || thousands === 8n) {
      // replace the last sound of the number with a pause
      const small = digit.pop()
      digit.push(small?.substring(0, small.length - 1) + 'っ')
    }

    if (thousands === 3n) {
      digit.push('ぜん')
    } else {
      digit.push('せん')
    }
    result.push(digit.join(''))
  }

  // hundreds
  if (hundreds > 0n) {
    const digit = []
    digit.push(SMALL[Number(hundreds)])
    if (hundreds === 1n) {
      // don't say the 1
      digit.pop()
    } else if (hundreds === 6n || hundreds === 8n) {
      // replace the last sound of the number with a pause
      const small = digit.pop()
      digit.push(small?.substring(0, small.length - 1) + 'っ')
    }

    if (hundreds === 3n) {
      digit.push('びゃく')
    } else if (hundreds === 6n) {
      digit.push('ぴゃく')
    } else {
      digit.push('ひゃく')
    }
    result.push(digit.join(''))
  }

  // tens
  if (tens > 0n) {
    const digit = []
    digit.push(SMALL[Number(hundreds)])
    if (tens === 1n) {
      // don't say the 1
      digit.pop()
    }
    digit.push('じゅう')
    result.push(digit.join(''))
  }

  // ones
  if (ones > 0n) {
    result.push(SMALL[Number(ones)])
  }

  return result
}

const helper = (n: bigint, power: bigint): string[] => {
  if (n === 0n) {
    return []
  }
  const [big, small] = divmod(n, 10000n)
  const result = helper(big, power + 1n).concat(fourDigits(small))
  if (small > 0 && power > 0) {
    // add the power to the last digit of the result
    const last = result.pop()
    result.push(last + LARGE[Number(power)])
  }
  return result
}

const itoa = (n: bigint): string => {
  if (n === 0n) {
    return 'ゼロ'
  }
  const negative = n < 0n
  if (negative) {
    n = -n
  }
  if (n > MAX_SAFE_NUMBER) {
    throw new Error('Number too large to convert.')
  }

  const result = helper(n, 0n)

  return (negative ? 'マイナス ' : '') + result.join(' ')
}

export default itoa
