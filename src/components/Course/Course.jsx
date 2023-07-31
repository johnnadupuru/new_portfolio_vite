import React from 'react'
import {Tilt} from "react-tilt"
import { colorChange } from '../change/colorChange'
import { changeBg } from '../change/change'

const Course = () => {
    const fontColor=colorChange((state)=>state.fontColor)
    const lightMode=changeBg((state)=>state.lightMode)
    const defaultOptions={
        reverse:false,
        max:60,
        perspective:1000,
        scale:1.1,
        speed:1000,
        transition:true,
        axis:null,
        reset:true,
        easing:"cubic-bezier(.03,.98,.52,.99)"
    }
  return (
    <div className='mb-20 p-5'>
        <h1 className={`${fontColor} font-bold text-3xl`}>Products.</h1>
        <p className={`${lightMode?"text-black":"text-white"} font-semibold text-lg`}>My publications you love it to read and i have written it from my heart.</p>
        <div className='grid justify-center grid-col-1 md:grid-cols-2 lg:grid-cols-4 items-center md:px-20 mt-5'>
            <div className='mb-20 lg:mb-0'>
                <Tilt options={defaultOptions} style={{ height: 250, width: 250 }} className="">
                    <div className='bg-[#8a8686] h-[300px] w-[300px] rounded-lg shadow-lg flex justify-center items-center'>
                        <div>
                            <img src="https://portfolio-alpha-seven-58.vercel.app/assets/overview-3137f26a.png" className='h-[150px] w-[100px] ml-8' alt=""/>
                            <p className={`${fontColor} font-bold text-xl`}>Web Developemnt</p>
                        </div>
                    </div>
                </Tilt>
            </div>
            <div className='mb-20 lg:mb-0'>
                <Tilt options={defaultOptions} style={{ height: 250, width: 250 }} className="">
                    <div className='bg-[#8a8686] h-[300px] w-[300px] rounded-lg shadow-lg flex justify-center items-center'>
                        <div>
                            <img src="https://portfolio-alpha-seven-58.vercel.app/assets/overview4-88436a05.png" className='h-[150px] w-[100px] ml-4' alt=""/>
                            <p className={`${fontColor} font-bold text-xl`}>Programming</p>
                        </div>
                    </div>
                </Tilt>
            </div>
            <div className='mb-20 lg:mb-0'>
                <Tilt options={defaultOptions} style={{ height: 250, width: 250 }} className="">
                    <div className='bg-[#8a8686] h-[300px] w-[300px] rounded-lg shadow-lg flex justify-center items-center'>
                        <div>
                            <img src="https://portfolio-alpha-seven-58.vercel.app/assets/overview2-ba6a7c6b.png" className='h-[150px] w-[100px] ml-12' alt=""/>
                            <p className={`${fontColor} font-bold text-xl`}>Backend Developemnt</p>
                        </div>
                    </div>
                </Tilt>
            </div>
            <div className='mb-20 lg:mb-0'>
                <Tilt options={defaultOptions} style={{ height: 250, width: 250 }} className="">
                    <div className='bg-[#8a8686] h-[300px] w-[300px] rounded-lg shadow-lg flex justify-center items-center'>
                        <div>
                            <img src="https://portfolio-alpha-seven-58.vercel.app/assets/overview3-d1ebb892.png" className='h-[150px] w-[100px] ml-8' alt=""/>
                            <p className={`${fontColor} font-bold text-xl`}>Payment Gateway</p>
                        </div>
                    </div>
                </Tilt>
            </div>
        </div>
    </div>
  )
}

export default Course