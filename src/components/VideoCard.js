import React from 'react'
import {  useSelector } from 'react-redux'
const VideoCard = ({info}) => {
   
    const {snippet, statistics}=info;
    const {thumbnails, title , channelTitle  }=snippet;
    const isMenuOpen=useSelector((store)=>(store.app.isMenuOpen));
    
  return (
    <div className={isMenuOpen?'p-4 m-1 shadow-lg w-72 cursor-pointer':'p-4 m-4 shadow-lg w-80 cursor-pointer'}>
        <img alt="thumbnail" className='rounded-lg' src={thumbnails.medium.url}></img>
        <h1 className='font-bold py-4'>{title}</h1>
        <p className='py-1'>{channelTitle}</p>
        <p>{statistics.viewCount} views</p>
    </div>
    
  )
}

export default VideoCard