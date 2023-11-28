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
        <h1 className={`${fontColor} text-4xl font-bold mb-3`}>Projects.</h1>
        <p className={`${lightMode?"text-black":"text-white"} mb-3 mr-3 text-xl font-semibold`}>I did crearte some sample projects. You can select on click any project and see it.</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center'>
            <div className='p-5 lg:w-[90%] lg:h-[200px] w-full bg-[#292727] mb-3 rounded-lg shadow-xl overflow-auto hover:bg-[#000000] duration-1000'>
                <a href="https://j-mart-ten.vercel.app/">
                <div className='flex justify-between'>
                    <h2 className={`${fontColor} font-bold text-2xl`}>E-Commerce Website</h2>
                    <div className='bg-black rounded-full p-1 h-fit'>
                        <AiFillStar className={`${fontColor} text-3xl animate-spin`}/>
                    </div>
                </div>
                <p className='text-lg font-semibold text-white'>"I chose React as the core framework for its component-based architecture and the ability to efficiently update and render components.
                 Redux Toolkit was instrumental in managing complex state management, ensuring a consistent and predictable user experience.
                  Axios was used for making HTTP requests to retrieve and send data to the server.The website is responsive and adapts seamlessly to various screen sizes and devices</p>
                </a>
            </div>
            <div className='p-5 lg:w-[90%] lg:h-[200px] w-full bg-[#292727] mb-3 mr-3 rounded-lg shadow-xl hover:bg-[#000000] duration-1000'>
                <a href='https://foundation-jeze.vercel.app/'>
                <div className='flex justify-between'>
                    <h2 className={`${fontColor} font-bold text-2xl`}>Foundation Website</h2>
                    <div className='bg-black rounded-full p-1 h-fit'>
                        <AiFillStar className={`${fontColor} text-3xl animate-spin`}/>
                    </div>
                </div>
                <p className='text-lg font-semibold text-white'>I have doing internship, they gave a task to create sample foundation website. I did create sample foundation website to collect some content from the internet.</p>
                </a>
            </div>
            <div className='p-5 lg:w-[90%] lg:h-[200px] w-full bg-[#292727] mb-3 mr-3 rounded-lg shadow-xl hover:bg-[#000000] duration-1000'>
                <a href='https://contact-list-roan-two.vercel.app/'>
                <div className='flex justify-between'>
                    <h2 className={`${fontColor} font-bold text-2xl`}>Sample Contact List Redux toolkit</h2>
                    <div className='bg-black rounded-full p-1 h-fit'>
                        <AiFillStar className={`${fontColor} text-3xl animate-spin`}/>
                    </div>
                </div>
                <p className='text-lg font-semibold text-white'>Creating contact list for learning redux and redux toolkit package</p>
                </a>
            </div>
            <div className='p-5 lg:w-[90%] lg:h-[200px] w-full bg-[#292727] mb-3 mr-3 rounded-lg shadow-xl hover:bg-[#000000] duration-1000'>
                <a href='https://dignityofnoble.org/'>
                <div className='flex justify-between'>
                    <h2 className={`${fontColor} font-bold text-2xl`}>Dignity of Nobel demo site</h2>
                    <div className='bg-black rounded-full p-1 h-fit'>
                        <AiFillStar className={`${fontColor} text-3xl animate-spin`}/>
                    </div>
                </div>
                <p className='text-lg font-semibold text-white'>In this project, I developed Digital Plotforms and About Us these pages and I supported to develop many pages.I did this project when I was working in Dignity of Nobel internship.</p>
                </a>
            </div>
        </div>
    </div>
  )
}

export default CaseStudies
