import React from 'react'
import Company from "../Components/Company";
import Email from "../Components/Email";
import GetStarted from "../Components/GetStarted";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Services from "../Components/Services";
import Solutions from "../Components/Solutions";
import WhatWeDo from '../Components/WhatWeDo';


const HomePage = () => {
  return (
    <div>
         <Navbar/>
    <GetStarted/>
    <Company/>
    <Services/>
    <Email/>
    <Solutions/>
    <WhatWeDo/>
    <Projects/>
    </div>
  )
}

export default HomePage