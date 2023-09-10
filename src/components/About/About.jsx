import React from 'react'
import { colorChange } from '../change/colorChange'
import { changeBg } from '../change/change'
import Business from '../Business/Business'
import Course from '../Course/Course'


const About= () => {
  const lightMode=changeBg((state)=>state.lightMode)
  const textColor=colorChange((state)=>state.textColor)
  const fontColor=colorChange((state)=>state.fontColor)
  const borderColor=colorChange((state)=>state.borderColor)
  return (
    <div className={`${lightMode?"bg-white":"bg-black py-5"}`}>
      <Course/>
      <Business/>
      <div className='flex flex-col justify-center items-center'>
        <h2 className={`${fontColor} font-bold text-3xl `}>Skills & Tools</h2>
        <div className='flex flex-wrap justify-center mt-5 lg:w-[70%]'>
          <button className={`${borderColor} border-[10px] shadow-lg text-red-200 rounded-full ${lightMode?"bg-black":"bg-white"} ${lightMode?"hover:bg-white":"hover:bg-black"} h-[120px] w-[120px] pb-1 mr-2 ml-2 mb-4 duration-1000`}>
            <img src="skills/js.png" className='h-[45px] w-[90px] ml-1' alt=""/>
            <p className={`${fontColor} font-bold`}>JavaScript</p>
          </button>
          <button className={`${borderColor} border-[10px] text-red-200 rounded-full ${lightMode?"bg-black":"bg-white"} ${lightMode?"hover:bg-white":"hover:bg-black"} h-[120px] w-[120px] pb-1 mr-2 ml-2 mb-4 duration-1000`}>
            <img src="skills/css.svg" className='h-[45px] w-[90px] ml-1' alt=""/>
            <p className={`${fontColor} font-bold`}>CSS</p>
          </button>
          <button className={`${borderColor} border-[10px] text-red-200 rounded-full ${lightMode?"bg-black":"bg-white"} ${lightMode?"hover:bg-white":"hover:bg-black"} h-[120px] w-[120px] pb-1 mr-2 ml-2 mb-4 duration-1000`}>
            <img src="skills/html.png" className='h-[45px] w-[50px] ml-5' alt=""/>
            <p className={`${fontColor} font-bold`}>HTML</p>
          </button>
          <button className={`${borderColor} border-[10px] text-red-200 rounded-full ${lightMode?"bg-black":"bg-white"} ${lightMode?"hover:bg-white":"hover:bg-black"} h-[120px] w-[120px] pb-1 mr-2 ml-2 mb-4 duration-1000`}>
            <img src="skills/React.png" className='h-[45px] w-[70px] ml-3' alt=""/>
            <p className={`${fontColor} font-bold`}>React JS</p>
          </button>
          <button className={`${borderColor} border-[10px] text-red-200 rounded-full ${lightMode?"bg-black":"bg-white"} ${lightMode?"hover:bg-white":"hover:bg-black"} h-[120px] w-[120px] pb-1 mr-2 ml-2 mb-4 duration-1000`}>
            <img src="skills/Bootstrap.png" className='h-[45px] w-[60px] ml-5' alt=""/>
            <p className={`${fontColor} font-bold`}>Bootstrap</p>
          </button>
          <button className={`${borderColor} border-[10px] text-red-200 rounded-full ${lightMode?"bg-black":"bg-white"} ${lightMode?"hover:bg-white":"hover:bg-black"} h-[120px] w-[120px] pb-1 mr-2 ml-2 mb-4 duration-1000`}>
            <img src="skills/Tailwind3.png" className='h-[45px] w-[60px] ml-5' alt=""/>
            <p className={`${fontColor} font-bold`}>Tailwind</p>
          </button>
          <button className={`${borderColor} border-[10px] text-red-200 rounded-full ${lightMode?"bg-black":"bg-white"} ${lightMode?"hover:bg-white":"hover:bg-black"} h-[120px] w-[120px] pb-1 mr-2 ml-2 mb-4 duration-1000`}>
            <img src="skills/python7.jpg" className='h-[45px] w-[60px] ml-5' alt=""/>
            <p className={`${fontColor} font-bold`}>Python</p>
          </button>
          <button className={`${borderColor} border-[10px] text-red-200 rounded-full ${lightMode?"bg-black":"bg-white"} ${lightMode?"hover:bg-white":"hover:bg-black"} h-[120px] w-[120px] pb-1 mr-2 ml-2 mb-4 duration-1000`}>
            <img src="skills/node1.jpg" className='h-[45px] w-[60px] ml-5' alt=""/>
            <p className={`${fontColor} font-bold`}>Node JS</p>
          </button>
          <button className={`${borderColor} border-[10px] text-red-200 rounded-full ${lightMode?"bg-black":"bg-white"} ${lightMode?"hover:bg-white":"hover:bg-black"} h-[120px] w-[120px] pb-1 mr-2 ml-2 mb-4 duration-1000`}>
            <img src="skills/sql1.png" className='h-[45px] w-[60px] ml-5' alt=""/>
            <p className={`${fontColor} font-bold`}>SQL</p>
          </button>
          <button className={`${borderColor} border-[10px] text-red-200 rounded-full ${lightMode?"bg-black":"bg-white"} ${lightMode?"hover:bg-white":"hover:bg-black"} h-[120px] w-[120px] pb-1 mr-2 ml-2 mb-4 duration-1000`}>
            <img src="skills/git1.png" className='h-[45px] w-[60px] ml-5' alt=""/>
            <p className={`${fontColor} font-bold`}>GIT</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default About