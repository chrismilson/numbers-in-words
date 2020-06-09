import React from 'react'
import InputDigits from './containers/InputDigits'
import DisplayWords from './containers/DisplayWords'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <a href="https://gist.github.com/chrismilson/48840cc4b77a56ee1caa9196ae1cc649">
        <h1>Numbers In Words</h1>
      </a>
      <InputDigits />
      <DisplayWords />
    </div>
  )
}
