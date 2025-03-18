import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SkillsSection from "./components/skills.jsx"
import Projects from "./components/project.jsx"
import AboutMe from "./components/about.jsx"

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  

  return (
    <>
      <div className=' font-monsorate  h-screen bg-black w-screen containe'> 
        <h1 className='text-5xl text-left p-3  text-green-300' >Portfolio</h1>
        <div className='grid grid-cols-[3fr_1.2fr] m-3 p-4 bg-[linear-gradient(142deg,rgb(43,42,47)_36%,rgba(9,9,121,0.89)_95%)]]'>


           <div className='h-[416px] overflow-y-scroll snap-y snap-mandatory p-4 '>
              {/* Home */}
              <div id="home" className='p-2  relative snap-start min-h-[385px]'>
                <h1 className='text-8xl absolute overflow-hidden   whitespace-nowrap animate-typing border-r-4 border-white top-40 left-10  w-24 text-white'>LOGAN</h1>
                <h3 className='absolute top-64 text-xl left-48 text-green-300'>Software Developer</h3>
              </div>
              
              {/* About Me */}
              <div id="about" className='mt-10 min-h-[385px] snap-start bg-black'>
                <h1 className='text-4xl inline ms-20 text-left text-amber-200'>About Me</h1>
                <AboutMe/>
              </div>

              {/* My Services */}
              {/* <div id="service" className='mt-4 min-h-[385px] snap-start bg-black'>
                <h1 className='text-8xl  top-48 left-16 text-amber-200'>LOGANATHAN</h1>
              </div> */}

              {/* Skills */}
              <div id="skill" className='mt-4 min-h-[385px] bg-white snap-start'>
              <h1 className='text-4xl mt-40 ms-20 text-left inline text-amber-200'>Skills</h1>
                <SkillsSection/>
              </div>

              {/* Project */}
              {/* <div id='project' className='mt-4 min-h-[385px] snap-start bg-black'>
                <h1 className='text-4xl mt-40 ms-10 inline text-left top-48 left-16 text-amber-200'>Project</h1>
                <Projects/>
              </div> */}

              {/* Contact */}
              {/* <div id="contact" className='mt-4 min-h-[385px] snap-start bg-black'>
                <h1 className='text-8xl  top-48 left-16 text-amber-200'>Contact</h1>
              </div> */}

              </div>



           <div className='h-120  p-4 '>
              <ol class="list-decimal list-inside text-left text-3xl p-3 leading-loose font-robot text-black ">
                <li className='hover:scale-105 text-white w-auto cursor-pointer' onClick={() => scrollToSection('home')}>Home</li>
                <li className='hover:scale-105 text-white w-auto cursor-pointer' onClick={() => scrollToSection('about')}>About Me</li>
                <li className='hover:scale-105 text-white w-auto cursor-pointer' onClick={() => scrollToSection('service')}>My Services</li>
                <li className='hover:scale-105 text-white w-auto cursor-pointer' onClick={() => scrollToSection('skill')}>Skills</li>
                <li className='hover:scale-105 text-white w-auto cursor-pointer' onClick={() => scrollToSection('project')}>Project</li>
                <li className='hover:scale-105 text-white w-auto cursor-pointer' onClick={() => scrollToSection('contact')}>Contact</li>
              </ol>
           </div>
        </div>
      </div>
      
      
    </>
  )
}

export default App
