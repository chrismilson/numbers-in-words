import React from 'react'
// import Button from './Button'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBackspace } from '@fortawesome/free-solid-svg-icons'
import './NumberInput.css'

const NumberInput: React.FC<{
  currentValue: bigint
  onChange: (value: bigint) => void
}> = props => {
  const { currentValue, onChange } = props

  return (
    <input
      type="number"
      className="NumberInput"
      value={`${currentValue}`}
      onChange={e => {
        const str = e.target.value.trim()
        if (str.match(/^-?\d*$/)) {
          const input = BigInt(str)
          onChange(input)
        }
      }}
    />
  )
  // return (
  //   <div className="NumberInput">
  //     <div className="buttons">
  //       {[...Array(10)].map((_, i) => {
  //         return (
  //           <Button
  //             key={i}
  //             onClick={() => {
  //               onChange(currentValue * 10 + i)
  //             }}
  //           >
  //             {i}
  //           </Button>
  //         )
  //       })}
  //       <Button
  //         onClick={() => {
  //           onChange(Math.floor(currentValue / 10))
  //         }}
  //       >
  //         <FontAwesomeIcon icon={faBackspace} />
  //       </Button>
  //     </div>
  //   </div>
  // )
}

export default NumberInput
