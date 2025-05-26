import React from 'react'



const Comment = ({data}) => {
    const {name,text,replies}=data;
  return (
    <div className='flex shadow-sm bg-gray-100 rounded-lg my-2'>
        <img alt="logo"  className="p-2 h-12 w-12" src="https://icon2.cleanpng.com/20180802/szl/be6bb96ad3231c53524d66fe43fc0018.webp"></img>
        <div className='px-3'>
            <h1 className='font-bold'>{name}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment