import React from 'react'
import { colorChange } from '../change/colorChange'
import { changeBg } from '../change/change'
import {AiFillStar} from "react-icons/ai"

const CaseStudies = () => {
    const lightMode=changeBg((state)=>state.lightMode)
  const textColor=colorChange((state)=>state.textColor)
  const fontColor=colorChange((state)=>state.fontColor)
  return (
    <div className={`${lightMode?"bg-white":"bg-black"} p-5 `}>
        <h1 className={`${fontColor} text-4xl font-bold mb-3`}>Case Studies.</h1>
        <p className={`${lightMode?"text-black":"text-white"} mb-3 mr-3 font-semibold`}>Following projects showcases my skills and experience through real-world examples of my work.<br/> Each project is briefly described with links to code repositories and live demos in it.<br/> It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:flex-row'>
            <div className='p-5 w-[75%] bg-[#292727] mb-3 rounded-lg shadow-xl hover:bg-[#000000] duration-1000'>
                <div className='flex justify-between'>
                    <h2 className={`${fontColor} font-bold text-2xl`}>Movix Website </h2>
                    <div className='bg-black rounded-full p-1'>
                        <AiFillStar className={`${fontColor} text-3xl animate-spin`}/>
                    </div>
                </div>
                <p className='text-lg font-semibold text-white'>A movie review website based on tmdb api the website uses react js for the fronted with the stunning features of skeleton loading , lazy loading.</p>
            </div>
            <div className='p-5 w-[75%] bg-[#292727] mb-3 mr-3 rounded-lg shadow-xl hover:bg-[#000000] duration-1000'>
                <div className='flex justify-between'>
                    <h2 className={`${fontColor} font-bold text-2xl`}>Dalli-2 Open Ai </h2>
                    <div className='bg-black rounded-full p-1'>
                        <AiFillStar className={`${fontColor} text-3xl animate-spin`}/>
                    </div>
                </div>
                <p className='text-lg font-semibold text-white'>OpenAI Stable Diffusion package to create a unique and interactive background effect. This technology has been used to create a captivating visual experience.</p>
            </div>
            <div className='p-5 w-[75%] bg-[#292727] mb-3 mr-3 rounded-lg shadow-xl hover:bg-[#000000] duration-1000'>
                <div className='flex justify-between'>
                    <h2 className={`${fontColor} font-bold text-2xl`}>Youtube Clone </h2>
                    <div className='bg-black rounded-full p-1'>
                        <AiFillStar className={`${fontColor} text-3xl animate-spin`}/>
                    </div>
                </div>
                <p className='text-lg font-semibold text-white'>Real world youtube clone using react js for frontend and rapid api for data fetching with the Use of trending css library Tailwind css this website a simpler design as youtube.</p>
            </div>
            <div className='p-5 w-[75%] bg-[#292727] mb-3 mr-3 rounded-lg shadow-xl hover:bg-[#000000] duration-1000'>
                <div className='flex justify-between'>
                    <h2 className={`${fontColor} font-bold text-2xl`}>Disney+Clone </h2>
                    <div className='bg-black rounded-full p-1'>
                        <AiFillStar className={`${fontColor} text-3xl animate-spin`}/>
                    </div>
                </div>
                <p className='text-lg font-semibold text-white'>In this website developer has integrated the login functionality by using firebase for backend and react js for frontend development.</p>
            </div>
        </div>
    </div>
  )
}

export default CaseStudies