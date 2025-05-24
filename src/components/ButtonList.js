import React from 'react'
import Button from "./Button"

const list=["All","Gaming","Sports","Songs","Soccer","Cricket","Live","News","Motivation","Content","Streamers","Fitness","Weight Training","Recently Uploaded","Watched","New to You"]

const ButtonList = () => {
  return (
    <div className='flex w-full overflow-x-auto no-scrollbar'>
        {list.map((name)=>(
            <Button key={name} name={name} />
        ))}
    </div>
  )
}

export default ButtonList