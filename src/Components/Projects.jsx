import React from 'react'
import cosmetic from "../Assest/cosmetic.png"
import sales from "../Assest/sales.png"
import fashion from "../Assest/fashion.png"
import laura from "../Assest/Laura.png"
import SEO from "../Assest/SEO.png"

const Projects = () => {
  return (
    <div>


    <div className='flex w-[80%] m-auto mt-[30px] justify-between'>

     <div className='w-[370px] h-[280px] shadow-2xl'>
          <img src={cosmetic} alt=""  className='m-auto mt-[10px]'/>
          <p className='text-center font-[500] text-[20px] font-Ubuntu normal m-auto mt-[20px]'>Cosmetic Forcest Marketing</p>
     </div>


     <div className='w-[370px] h-[280px]'>
          <img src={sales} alt=""  className='m-auto mt-[10px]'/>
          <p className='text-center font-[500] text-[20px] font-Ubuntu normal m-auto mt-[20px]'>Sales Analytic</p>
     </div>


     <div className='w-[370px] h-[280px]'>
          <img src={fashion} alt=""  className='m-auto mt-[10px]'/>
          <p className='text-center font-[500] text-[20px] font-Ubuntu normal m-auto mt-[20px]'>Fashion Store Mobile Apps</p>
     </div>
    </div>


    <div className='flex w-[80%] m-auto mt-[60px] justify-between'>

<div className='w-[370px] h-[280px] shadow-2xl'>
     <img src={laura} alt=""  className='m-auto mt-[10px]'/>
     <p className='text-center font-[500] text-[20px] font-Ubuntu normal m-auto mt-[20px]'>Laura’s Clore Branding Identity </p>
</div>


<div className='w-[370px] h-[280px]'>
     <img src={SEO} alt=""  className='m-auto mt-[10px]'/>
     <p className='text-center font-[500] text-[20px] font-Ubuntu normal m-auto mt-[20px]'>SEO Marketing 4.0</p>
</div>


<div className='w-[370px] h-[280px]'>
    <p className='text-[#F17216] font-Ubuntu normal mt-[10px]'>PROJECTS</p>

    <p className='mt-[20px] tracking-[0.02em] font-[700] text-[36px] font-Ubuntu normal w-[350px]'>Selected Works from Us</p>

    <div className='flex rounded-[80px] w-[143px] h-[55px]  border-solid border-[1px] border-[#ffb4c6] font-[700] justify-center items-center mt-[50px]'>See More</div>
</div>
</div>
    </div>
  )
}

export default Projects