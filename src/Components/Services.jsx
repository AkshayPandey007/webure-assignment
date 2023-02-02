import React from 'react'
import arrow from "../Assest/arrow.png"
import shop from "../Assest/shop.png"
import cards from "../Assest/cards.png"
import create from "../Assest/create.png"

const Services = () => {
  return (
    <div className='h-[441px]  flex justify-between w-[1440px] m-auto'>
      
      <div className='w-[32%]  h-[100%]'>
       
       <div className='w-[70%] ml-auto   mt-[65px] '>
         <p className='text-[#F17216] font-[400] font-Ubuntu leading-[18.38px]'>SERVICES</p>

         <p className='font-[700] text-[36px] font-Ubuntu leading-[53px] tracking-[0.02em] normal text-[#282C4B] mt-[10px]'>Our Capabilities</p>

         <p className='h-[96px] font-Ubuntu normal text-[20px] text-[#747582] mt-[10px] w-[335px] '>We will bring the breathe of our experience and industry knowledge to help you succeed</p>

         <div className=''>
            <img src={arrow} alt="" className=' border-red-600 ml-auto'/>
         </div>
       </div>

      </div>



      <div className=' w-[63%] items-center flex justify-around'>

     <div className='h-[287px] w-[251px] '>
        <img src={shop} alt="" className=' mt-[35px] ml-[30px]'/>

        <p className='text-[20px] font-[500] font-Ubuntu mt-[10px] ml-[30px] leading-[25px]'>Consult</p>

        <p className='text-[#747582] font-Ubuntu leading-[27px] mt-[10px] ml-[30px] w-[177px] text-[15px]'>Leverage agile framework to provide a robust high level synopsys overviews.</p>
     </div>


     <div className='h-[287px] w-[251px] '>
     <img src={cards} alt="" className=' mt-[35px] ml-[30px]'/>

    <p className='text-[20px] font-[500] font-Ubuntu mt-[10px] ml-[30px] leading-[25px]'>Create</p>

    <p className='text-[#747582] font-Ubuntu leading-[27px] mt-[10px] ml-[30px] w-[177px] text-[15px]'>Bring to the table survival strategies to ensure proactive domination </p>
     </div>


     <div className='h-[287px] w-[251px] '>

     <img src={create} alt="" className=' mt-[35px] ml-[30px]'/>

    <p className='text-[20px] font-[500] font-Ubuntu mt-[10px] ml-[30px] leading-[25px]'>Collaborate </p>

    <p className='text-[#747582] font-Ubuntu leading-[27px] mt-[10px] ml-[30px] w-[177px] text-[15px]'>Grow the holistic world view of disruptive innovation workspace</p>
     </div>


      </div>


    </div>
  )
}

export default Services