import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoConatiner = () => {
  const [videos ,setvideos]=useState([])
  useEffect(()=>{
    fetchVideos();
  },[])
  const fetchVideos=async ()=>{
    const data=await fetch(YOUTUBE_API);
    const json=await data.json();
    setvideos(json.items)
  }
  return (
    <div className='flex h-full flex-wrap overflow-y-auto'>
      {videos.map((video)=>(
        <Link to={"/watch?v="+video.id}>
        <VideoCard key={video.id} info={video}/>
        </Link>

      ))}
      
    </div>
  )
}

export default VideoConatiner