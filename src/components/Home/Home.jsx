import React from 'react'
import { colorChange } from '../change/colorChange'
import { changeBg } from '../change/change'
import {useTypewriter,Cursor} from "react-simple-typewriter"
import "./home.css"

const Home = () => {
  const lightMode=changeBg((state)=>state.lightMode)
  const textColor=colorChange((state)=>state.textColor)
  const fontColor=colorChange((state)=>state.fontColor)

  const [text]=useTypewriter({
    words:['Full Stack Developer','Frontend Developer','Backend Developer'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:80,
  });

  return (
    <div>
      <div className={`flex flex-col lg:flex-row ${lightMode?"bg-white":"bg-black"}`}>
        <div className='lg:w-1/2 h-1/2 lg:h-[100vh] relative order-2 lg:order-1'>
          <div className={`bg-${textColor} h-[500px] lg:h-[100vh] w-[25%]`}>
          </div>
          <div className={`absolute right-30 top-7 left-9 ${lightMode?" bg-white":"bg-black"} rounded-3xl shadow-xl`}>
            <img src={"/photos/janardhana.jpg.png"} className='h-[400px] w-[400px] lg:h-[500px] lg:w-[500px] rounded-3xl shadow-xl' alt=''/>
          </div>
        </div>
        <div className='flex justify-center items-center h-[400px] lg:h-[100vh] lg:w-1/2 order-1 lg:order-2'>
          <div className={``}>
              <h1 className={`font-bold text-3xl ${lightMode?"text-black":"text-white"}`}>Hi,I am <span className={`${fontColor} text-6xl`}>Janardhana</span></h1>
            <div className='inline-flex'>
              <h1 className={`${lightMode?"text-black":"text-white"} text-3xl font-bold`}>I am <span className={`${fontColor}`}>{text}</span><span className={`${fontColor}`}><Cursor/></span> </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home