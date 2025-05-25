import React, { useEffect } from 'react'
import ButtonList from './ButtonList'
import VideoConatiner from './VideoConatiner'
import { useDispatch, useSelector } from 'react-redux'
import { openMenu } from '../utils/appSlice'

const MainContainer = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(openMenu());
  },[])
  const isMenuOpen=useSelector((store)=>(store.app.isMenuOpen));
  
  

  return (
    <div className={isMenuOpen?'w-5/6 h-full overflow-hidden':'w-full h-full overflow-hidden'}>
        <ButtonList />
        <VideoConatiner />
    </div>
  )
}

export default MainContainer