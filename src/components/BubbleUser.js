import React from 'react'
import "./styles.css"

export const BubbleUser = ({ mensaje }) => {
  return (
    <div className='chat-user bubble'>
      <p>{mensaje}</p>
    </div>
  )
}
