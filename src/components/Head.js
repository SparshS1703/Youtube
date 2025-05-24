import React from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'

const Head = () => {
    const dispatch=useDispatch();
    const handleClick=()=>{
        
        dispatch(toggleMenu());
    }
  return (
    <div className='flex shadow-lg justify-between p-2'>
        <div className='flex w-1/4 items-center'>
            <img alt="menu" className="h-8 mx-2 cursor-pointer" onClick={()=>handleClick()} src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"></img>
            <img alt="logo" className="h-16 mx-2 px-2 cursor-pointer" src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png" />
        </div>
        <div className="flex w-1/2 items-center" >
            <input type="text" placeholder="Search" className='p-2 ml-4 w-3/4 border border-gray-400 rounded-l-full'></input>
            <button className='border border-gray-400  rounded-r-full p-2 bg-gray-100'><img alt="search" className="h-6 " src="https://static.vecteezy.com/system/resources/thumbnails/009/652/218/small_2x/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg"></img>  </button>
        </div>
        <div className="flex w-1/4 justify-end items-center">
            <img className="h-8 mx-5 " alt="user" src="https://icon2.cleanpng.com/20180802/szl/be6bb96ad3231c53524d66fe43fc0018.webp"></img>
        </div>
    </div>
  )
}

export default Head