import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex shadow-sm my-2 p-1'>
         <img
          className="h-6 "
          alt="user"
          src="https://icon2.cleanpng.com/20180802/szl/be6bb96ad3231c53524d66fe43fc0018.webp"
        ></img>
        <span className='font-bold mx-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage