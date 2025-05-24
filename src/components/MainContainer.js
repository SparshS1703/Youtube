import React from 'react'
import ButtonList from './ButtonList'
import VideoConatiner from './VideoConatiner'

const MainContainer = () => {
  return (
    <div className='w-5/6 h-full overflow-hidden'>
        <ButtonList />
        <VideoConatiner />
    </div>
  )
}

export default MainContainer