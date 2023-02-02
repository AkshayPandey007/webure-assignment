import React from 'react'
import what from "../Assest/what.png"
import front from "../Assest/front.png"
import back from "../Assest/back.png"
import design from "../Assest/design.png"
import appli from "../Assest/appli.png"
import analytic from "../Assest/analytic.png"
import QandA from "../Assest/QandA.png"
import offc from "../Assest/offc.png"
import cloud from "../Assest/cloud.jpg"

const WhatWeDo = () => {
  return (
    <div>

    <div className='flex m-auto  justify-center relative w-[530px] m-auto'>
        <div className=' absolute left-0 top-[-9px]'>
            <img src={what} alt="" className='w-[119px] h-[121px]'/>
        </div>
        <div className='h-[105px] font-Poppins normal font-[600] w-[436px] text-[70px]'>What We Do</div>
    </div>



    <div className='flex w-[90%] m-auto mt-[30px] h-[210px] justify-between'>
    
   <p className='h-[108px] w-[178px] font-[600] text-[36px] leading-[54px] font-Poppins normal mt-[30px]'> Our Services</p>

   <p className=' w-[1105px] h-[206px] font-Poppins normal font-[500] text-[23px] tracking-[0.05em] leading-[34.5px] text-[#A9A9A9]'>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature</p>
    </div>




    <div className='flex  w-[85%] m-auto h-[300px] gap-[40px]'>
    

    <div className='w=[272px] h=[272px]  w-[1105px] bg-[#3f0598] rounded-[8px] shadow-2xl'>
        <img src={design} alt="" className='m-auto mt-[30px] '/> 
        <p className='text-[white] font-[600] text-[23px] font-Poppins normal leading-[34px] text-center mt-[20px]'>Design</p>
        <p className='w-[236px] font-[500] text-[14px] text-center font-Poppins normal leading-[21px] m-auto text-[white] mt-[20px]'>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
    </div>

    <div className='w=[272px] h=[272px]  w-[1105px] rounded-[8px] shadow-2xl'>
        <img src={front} alt="" className='m-auto mt-[30px]'/>
        <p className='font-[600] text-center text-[26px] leading-[39px] font-Poppins normal w-[179px] h-[78px] m-auto mt-[20px]'>Front End Development</p>
    </div> 

    <div className='w=[272px] h=[272px]  w-[1105px] rounded-[8px] shadow-2xl'>
    <img src={back} alt="" className='m-auto mt-[30px]'/>
        <p className='font-[600] text-center text-[26px] leading-[39px] font-Poppins normal w-[179px] h-[78px] m-auto mt-[20px]'>Back End Development</p>
    </div>

    <div className='w=[272px] h=[272px]  w-[1105px] rounded-[8px] shadow-2xl'>
    <img src={appli} alt="" className='m-auto mt-[30px]'/>
        <p className='font-[600] text-center text-[26px] leading-[39px] font-Poppins normal w-[179px] h-[78px] m-auto mt-[20px]'>Application Development</p>
    </div>

    </div>



    <div className='flex w-[85%] m-auto h-[300px] gap-[40px] mt-[70px]'>


    <div className='w=[272px] h=[272px]  w-[1105px] rounded-[8px] shadow-2xl'>
        <img src={cloud} alt="" className='m-auto mt-[30px] w-[101px] h-[101px]'/>
        <p className='font-[600] text-center text-[26px] leading-[39px] font-Poppins normal w-[114px] h-[78px] m-auto mt-[20px]'>Cloud Services</p>
    </div> 

    <div className='w=[272px] h=[272px]  w-[1105px] rounded-[8px] shadow-2xl'>
    <img src={analytic} alt="" className='m-auto mt-[30px]'/>
        <p className='font-[600] text-center text-[26px] leading-[39px] font-Poppins normal w-[179px] h-[78px] m-auto mt-[20px]'>Analytics</p>
    </div>

    <div className='w=[272px] h=[272px]  w-[1105px] rounded-[8px] shadow-2xl'>
    <img src={QandA} alt="" className='m-auto mt-[30px]'/>
        <p className='font-[600] text-center text-[26px] leading-[39px] font-Poppins normal w-[114px] h-[78px] m-auto mt-[20px]'>Q-A And Testing</p>
    </div>

    <div className='w=[272px] h=[272px]  w-[1105px] rounded-[8px] shadow-2xl'>
    <img src={offc} alt="" className='m-auto mt-[30px]'/>
        <p className='font-[600] text-center text-[26px] leading-[39px] font-Poppins normal w-[149px] h-[78px] m-auto mt-[20px]'>Back Office Support</p>
    </div>

    </div>





    </div>
  )
}

export default WhatWeDo