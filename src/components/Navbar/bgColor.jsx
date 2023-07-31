import React from 'react'
import {MdOutlineDarkMode} from "react-icons/md"
import { changeBg } from '../change/change'
import { colorChange } from '../change/colorChange'

const BgColor = () => {
    const lightMode=changeBg((state)=>state.lightMode)
    const redColor=colorChange((state)=>state.redColor)
    const yellowColor=colorChange((state)=>state.yellowColor)
    const blueColor=colorChange((state)=>state.blueColor)
    const orangeColor=colorChange((state)=>state.orangeColor)
    const greenColor=colorChange((state)=>state.greenColor)
    const purpleColor=colorChange((state)=>state.purpleColor)
    
  return (
    <div className={`${lightMode?"bg-white":"bg-black"} flex justify-end transition-all duration-700 lg:mr-[100px]`}>
        <div className='flex flex-wrap right-0 w-[300px]'>
            <button onClick={redColor} className='bg-red-600 rounded-full h-4 w-4 lg:h-6 lg:w-6 mr-2' >
            </button>
            <button onClick={blueColor} className='bg-blue-600 rounded-full h-4 w-4 lg:h-6 lg:w-6 mr-2'>
            </button>
            <button onClick={greenColor} className='bg-green-400 rounded-full h-4 w-4 lg:h-6 lg:w-6 mr-2'>
            </button>
            <button onClick={purpleColor} className='bg-purple-600 rounded-full h-4 w-4 lg:h-6 lg:w-6 mr-2'>
            </button>
            <button onClick={orangeColor} className='bg-orange-600 rounded-full h-4 w-4 lg:h-6 lg:w-6 mr-2'>
            </button>
            <button onClick={yellowColor} className='bg-yellow-400 rounded-full h-4 w-4 lg:h-6 lg:w-6 mr-2'>
            </button>
        </div>
    </div>
  )
}

export default BgColor