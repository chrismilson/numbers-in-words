import React from 'react'

const DisplayString: React.FC<{
  content: string
}> = ({ content }) => <div className="DisplayString">{content}</div>

export default DisplayString
