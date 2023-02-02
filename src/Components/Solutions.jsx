import React from 'react'
import solutin from "../Assest/Solution.png"
import about from "../Assest/About.png"

const Solutions = () => {
  return (
    <div>

        <div>
      <img src={solutin} alt="" className='object-cover'/>
      </div>


      <div>
        <img src={about} alt="" className='object-cover'/>
      </div>
    </div>
  )
}

export default Solutions