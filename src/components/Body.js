import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex h-full w-full overflow-hidden'>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Body