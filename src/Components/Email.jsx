import React from 'react'
import Styles from "../Css/Email.module.css"
import photo from "../Assest/Photo.png"
import check from "../Assest/check.png"

const Email = () => {
  return (

  <div id={Styles.emailBg}>

   <div className='w-[656px]  h-[100%]'>
    <img src={photo} alt="" className='object-cover'/>
   </div>


   <div>
    <p className='text-[#F17216] font-Ubuntu leading-[18.38px] mt-[45px] ml-[30px]'>WHY CHOOSE US</p>

    <p className='font-[700] text-[36px] w-[495px] leading-[60px] tracking-[0.01em] text-[#FFFFFF] ml-[30px] mt-[10px]'>Take on any Challenge of the Digital World</p>

    <div className='flex gap-[15px] ml-[30px] item-center mt-[20px]'>
        <img src={check} alt="" className='w-[25px] h-[25px]'/>
        <p className='text-[20px] text-[#CED1E6] font-Ubuntu normal leading-[23px]'>Corporate Financial Advisory</p>
    </div>

    <div className='flex gap-[15px] ml-[30px] item-center mt-[20px]'>
        <img src={check} alt="" className='w-[25px] h-[25px]'/>
        <p className='text-[20px] text-[#CED1E6] font-Ubuntu normal leading-[23px]'>Development of Financial Models</p>
    </div>

    <div className='flex gap-[15px] ml-[30px] item-center mt-[20px]'>
        <img src={check} alt="" className='w-[25px] h-[25px]'/>
        <p className='text-[20px] text-[#CED1E6] font-Ubuntu normal leading-[23px]'>Deal Structuring</p>
    </div>



    <div className='ml-[30px] mt-[80px]'>
        <input type="text" placeholder='Enter your eamil ID' className='font-[700] text-[ #FFFFFF] text-[20px]  tracking-[0.02em] w-[360px] h-[44px] border-[0px] 
        leading-[23px] bg-transparent border-b-2 pb-[20px]' 
        />
        <button className='w-[210px] h-[68px] rounded-[192px] bg-[#fc4873] text-[18px] text-[white] font-[700] font-Ubuntu border-2 border-solid border-white-500'>Get Started</button>
    </div>
   </div>



    </div>
  )
}

export default Email