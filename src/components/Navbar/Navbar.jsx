import React from 'react'
import { NavLink } from 'react-router-dom'
import {HiHome} from "react-icons/hi"
import {AiFillProfile,AiFillProject} from "react-icons/ai"
import BgColor from './bgColor'
import {MdDarkMode} from "react-icons/md"
import { changeBg } from '../change/change'
import { colorChange } from '../change/colorChange'
import "./index.css"

const Navbar = () => {
    const lightMode=changeBg((state)=>state.lightMode)
    const changeBgColor=changeBg((state)=>state.changeBgColor)
    const textColor=colorChange((state)=>state.textColor)

    const bgImage=lightMode?<MdDarkMode />:<MdDarkMode className='text-white'/>
    const color="white"
  return (
        <div className={` py-3 ${lightMode?"bg-white":"bg-black"} w-[100%]`}>
            <div className='flex justify-around lg:justify-between'>
                <div className={`lg:ml-8 ${lightMode?"bg-black":"bg-white"} rounded-full`}>
                    <NavLink to="/">
                        <img src="/photos/janardhana.jpg.png" className='rounded-full h-[50px] w-[50px]'alt=""/>
                    </NavLink>
                </div>
                <div className='flex justify-around '>
                    <div className={`rounded-full bg-${textColor} flex flex-col justify-center h-fit pt-1 pb-1 mr-3 lg:mr-6 hover:text-white`}>
                        <NavLink to="/" className="group cursor-pointer mr-2">
                            <HiHome className='text-3xl ml-2'/>
                            <p className='hidden group-hover:block text-[10px] ml-2 font-bold mb-1'>Home</p>
                        </NavLink>
                    </div>
                    <div className={`rounded-full bg-${textColor} flex flex-col justify-center lg:mr-6 pt-1 pb-1 h-fit hover:text-white mr-2`}>
                        <NavLink to="/about" className="group cursor-pointer mr-2">
                            <AiFillProfile className='text-3xl ml-2 mb-0 pt-1'/>
                            <p className='hidden group-hover:block text-[10px] ml-2 font-bold mb-1'>About</p>
                        </NavLink>
                    </div>
                    <div className={`rounded-full bg-${textColor} flex flex-col justify-center lg:mr-6 pt-1 pb-1 h-fit hover:text-white`}>
                        <NavLink to="/projects" className="group cursor-pointer mr-2">
                            <AiFillProject className='text-3xl ml-2 mb-0 pt-1'/>
                            <p className='hidden group-hover:block text-[10px] ml-2 font-bold mb-1'>Project</p>
                        </NavLink>
                    </div>
                </div>
                <div className='flex lg:mr-11'> 
                    <button onClick={changeBgColor} className="cursor-pointer text-3xl mr-3">
                        {bgImage}
                    </button>
                    <div className='group relative'>
                        <button className={`text-red-300 text-[22px] pt-3 cursor-pointer font-bold`}>Colors</button>
                        <div className='absolute right-2 top-[-100px] group-hover:top-10'>
                            <BgColor/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar