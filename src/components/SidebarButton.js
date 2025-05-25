import React from 'react'

const SidebarButton = ({svg , name}) => {

    
  return (
    <div className='flex'>
        {svg}
        <p>{name}</p>
    </div>
  )
}

export default SidebarButton