import React from 'react'
import './DisplayString.css'

const DisplayString: React.FC<{
  content: string
}> = ({ content }) => <div className="DisplayString">{content}</div>

export default DisplayString
