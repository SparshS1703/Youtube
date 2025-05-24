import React from 'react'

const Button = ({name}) => {
  return (
    <div >
        <button  className='py-1.5 px-4 m-2 bg-gray-200 rounded-lg  whitespace-nowrap'>
        {name}
        </button>
    </div>
  )
}

export default Button