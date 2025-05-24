import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    const {snippet, statistics}=info;
    const {thumbnails, title , channelTitle  }=snippet;
    
  return (
    <div className='p-4 shadow-lg w-72 cursor-pointer'>
        <img alt="thumbnail" className='rounded-lg' src={thumbnails.medium.url}></img>
        <h1 className='font-bold py-4'>{title}</h1>
        <p className='py-1'>{channelTitle}</p>
        <p>{statistics.viewCount} views</p>
    </div>
    
  )
}

export default VideoCard