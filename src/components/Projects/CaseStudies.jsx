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
        <p className={`${lightMode?"text-black":"text-white"} mb-3 mr-3 font-semibold`}>I did crearte some sample projects.</p>
        <div className='flex flex-col justify-center items-center'>
            <div className='p-5 w-[75%] bg-[#292727] mb-3 rounded-lg shadow-xl hover:bg-[#000000] duration-1000'>
                <a href="https://njanardhana.ccbp.tech/">
                <div className='flex justify-between'>
                    <h2 className={`${fontColor} font-bold text-2xl`}>Todos Application</h2>
                    <div className='bg-black rounded-full p-1 h-fit'>
                        <AiFillStar className={`${fontColor} text-3xl animate-spin`}/>
                    </div>
                </div>
                <p className='text-lg font-semibold text-white'></p>
                <ul className=''>
                    <li className='text-lg font-semibold text-white'>Streamlined task management through a combination of HTML, CSS, and Bootstrap for an intuitive interface.</li>
                    <li className='text-lg font-semibold text-white'> Seamless CRUD operations through JavaScript event listeners and dynamic UI updates</li>
                    <li className='text-lg font-semibold text-white'>Secure task persistence with local storage methods, ensuring that your tasks are always available.</li>
                </ul>
                <p className='text-lg font-semibold text-white'>Technologies used: HTML, CSS, JS, Bootstrap</p>
                </a>
            </div>
            <div className='p-5 w-[75%] bg-[#292727] mb-3 mr-3 rounded-lg shadow-xl hover:bg-[#000000] duration-1000'>
                <a href='https://foundation-jeze.vercel.app/'>
                <div className='flex justify-between'>
                    <h2 className={`${fontColor} font-bold text-2xl`}>Satya Deep Foundation </h2>
                    <div className='bg-black rounded-full p-1 h-fit'>
                        <AiFillStar className={`${fontColor} text-3xl animate-spin`}/>
                    </div>
                </div>
                <p className='text-lg font-semibold text-white'>I have doing internship, they gave a task to create sample foundation website. I did create sample foundation website to collect some content from the internet.</p>
                </a>
            </div>
            <div className='p-5 w-[75%] bg-[#292727] mb-3 mr-3 rounded-lg shadow-xl hover:bg-[#000000] duration-1000'>
                <a href='https://contact-list-roan-two.vercel.app/'>
                <div className='flex justify-between'>
                    <h2 className={`${fontColor} font-bold text-2xl`}>Sample Contact List Redux toolkit</h2>
                    <div className='bg-black rounded-full p-1'>
                        <AiFillStar className={`${fontColor} text-3xl animate-spin`}/>
                    </div>
                </div>
                <p className='text-lg font-semibold text-white'>Creating contact list for learning redux and redux toolkit package</p>
                </a>
            </div>
            <div className='p-5 w-[75%] bg-[#292727] mb-3 mr-3 rounded-lg shadow-xl hover:bg-[#000000] duration-1000'>
                <a href='https://new-portfolio-vite.vercel.app/'>
                <div className='flex justify-between'>
                    <h2 className={`${fontColor} font-bold text-2xl`}>Portfolio Website </h2>
                    <div className='bg-black rounded-full p-1'>
                        <AiFillStar className={`${fontColor} text-3xl animate-spin`}/>
                    </div>
                </div>
                <p className='text-lg font-semibold text-white'>I did create my Portfolio using React JS . In this portfolio i used zustand library for state management and creating dark and white theme we can select moon icon. Change color of text we can select on the color text at top right og web page.</p>
                </a>
            </div>
        </div>
    </div>
  )
}

export default CaseStudies