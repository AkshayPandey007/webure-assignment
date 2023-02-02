import React from 'react'
import Slack from "../Assest/Slack.png"
import pruden from "../Assest/pruden.png"
import zoover from "../Assest/zoover.png"
import micro from "../Assest/micro.png"

const Company = () => {
  return (
    <div className=' w-[1440px] m-auto h-[140px] flex justify-evenly items-center mt-[20px] '>


     <div className='w-[200px] h-[80px] '>
        <img src={Slack} alt="" className='m-auto '/>
     </div>
     <div className='flex w-[200px] h-[80px]  items-center'>
     <img src={pruden} alt="" className='m-auto '/>
     </div>
     <div className='flex w-[200px] h-[80px] items-center'>
     <img src={micro} alt="" className='m-auto '/>
     </div>
     <div className='flex w-[200px] h-[80px] items-center'>
     <img src={zoover} alt="" className='m-auto '/>
     </div>



    </div>
  )
}

export default Company