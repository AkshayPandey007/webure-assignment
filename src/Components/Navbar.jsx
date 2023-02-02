import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-[1400px] m-auto '>
        <div className=" w-[90%] m-auto h-20 flex items-center justify-between">

           <div className='font-bold font-Ubuntu italic text-[#FB3F6C]  text-[26px] w-[23%]'>Webure Technologies</div>

           <div className='flex font-Ubuntu w-[50%]  justify-between'>
            <p className='text-[#747582] text-base-400'>About Us</p>
            <p className='text-[#747582] text-base-400'>Services</p>
            <p className='text-[#747582] text-base-400'>Careers</p>
            <p className='text-[#747582] text-base-400'>ROI Stories</p>
            <p className='text-[#747582] text-base-400'>Blog</p>
            <p className='text-[#747582] text-base-400'>Contact Us</p>
           </div>


           <div className='border-solid border-[1px] border-[#c4a6f4] rounded-[80px] text-xs-700 font-Ubuntu py-[10px] px-[25px] bg-[white]'>
            Let's Talk
           </div>
        </div>
    </div>
  )
}

export default Navbar