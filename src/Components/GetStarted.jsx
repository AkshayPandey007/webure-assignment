import React from 'react'
import GetStart from "../Assest/GetStart.png"
import verify from "../Assest/verify.png"
import vector from "../Assest/Vector.png"
import music from "../Assest/music.png"
import styles from "../Css/GetStarted.module.css"


const GetStarted = () => {
  return (
    <div className="w-[1400px]  h-[700px] m-auto flex" id={styles.startbg}>


        <div className='w-[60%]'>

            <div className='  mt-[90px] h-[481px] ml-[70px] w-[646px]'>


              <div className=' flex gap-[10px]'>
              <div>
                <img src={verify} alt="" className='w-[25px] h-[25px]'/>
              </div>
              <div className='text-[#F17216] font-Ubuntu text-[16px]'>
              Best Business Platform - World Record 2021
              </div>
              </div>


              <div className='w-[646px]  mt-[20px] h-[160px]'>
             <h1 className='text-[58px] leading-[80px] font-[700] font-Ubuntu tracking-[0.02em]'>Reach Your Business Goals in Record Time</h1>
             <div className='relative'>
             <img src={vector} alt="" className='absolute top-[-90px] right-[60px]'/>
             </div>
             </div>

             <div className='w-[561px]  leading-[36px] h-[108px] text-[20px] text-[400] font-Ubuntu text-[#747582] mt-[20px]'>
             Support small business and join the nationwide movement to encourage commercial support for the millions of minority owned businesses helping world economy.
             </div>



             <div  className=' mt-[30px] w-[80%] flex items-center justify-between' >

             <div>
                <button className='w-[210px] h-[68px] rounded-[192px] bg-[#fc4873] text-[18px] text-[white] font-[700] font-Ubuntu '>Get Started</button>
             </div>

             <div className='flex gap-[10px]'>
                <img src={music} alt="" className='h-[20px] w-[20px]'/>
                <p className='text-[18px] font-[500] font-Ubuntu tracking-[0.02em] leading-[21px] h-[21px]'>Book a 30 Min Quick Meeting </p>
             </div>
             </div>


            </div>
        </div>



        <div className='w-[45%] object-cover '><img src={GetStart} alt=""/></div>
    </div>
  )
}

export default GetStarted