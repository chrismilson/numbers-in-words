import React from 'react'
// import Button from './Button'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBackspace } from '@fortawesome/free-solid-svg-icons'

const NumberInput: React.FC<{
  currentValue: number
  onChange: (value: number) => void
}> = props => {
  const { currentValue, onChange } = props

  return (
    <input
      type="number"
      className="NumberInput"
      value={`${currentValue}`}
      onChange={e => {
        const input = parseInt(e.target.value, 10)
        onChange(input === NaN ? 0 : input)
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
