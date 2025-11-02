import React from 'react'
import welcomebanner from "./../assets/welcome.png"

const Welcome = () => {
  return (
    <div className='mt-[112px] mx-[67px] wlbanner'>
        <img src={welcomebanner} alt="" className='rounded-[20px]'/>
    </div>
  )
}

export default Welcome