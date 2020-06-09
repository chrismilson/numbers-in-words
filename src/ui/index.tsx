import React from 'react'
import InputDigits from './containers/InputDigits'
import DisplayWords from './containers/DisplayWords'

export default function App() {
  return (
    <div className="App">
      <h1>Numbers In Words</h1>
      <InputDigits />
      <DisplayWords />
    </div>
  )
}
