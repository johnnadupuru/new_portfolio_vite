import React from 'react'
import { colorChange } from '../change/colorChange'
import { changeBg } from '../change/change'
import CaseStudies from './CaseStudies'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Projects = () => {
    const lightMode=changeBg((state)=>state.lightMode)
  const textColor=colorChange((state)=>state.textColor)
  const fontColor=colorChange((state)=>state.fontColor)
  return (
    <div className={`${lightMode?"bg-white":"bg-black"}  pb-5`}>
        <CaseStudies/>
        <div className='mt-6 px-5 py-5'>
            <p className={`${lightMode?"text-black":"text-white"} font-semibold`}></p>
            <h2 className={`${fontColor} font-bold text-3xl`}>Education Qualification</h2>
            <center className='mt-5'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='bg-[#daced2] rounded-xl w-[90%] lg:w-[50%] shadow-zinc-600 flex justify-center items-center p-5'>
                            <div className="w-full">
                                <div className="flex justify-around items-center p-4">
                                    <img
                                    src="https://i.ibb.co/P9X9nWw/2016-02-4-22-43-35-sai-mdhavi-college.gif"
                                    className="h-[60px] w-[120px] md:h-[100px] md:w-[200px] rounded-full"
                                    alt="logo-pic"
                                    />
                                    <h1 className={`${fontColor} font-bold text-2xl lg:text-5xl`}>Engineering</h1>
                                </div>
                                <hr className='h-1 w-full bg-gray-500'/>
                                <div className="text-left lg:ml-10">
                                    <p className="font-semibold text-xl">
                                    <span className="font-bold text-2xl">College Name</span> : Sri Sai Madhavi Institute Of Science And Technology
                                    </p>
                                    <p className="font-semibold text-xl">
                                    <span className="font-bold text-2xl"> Branch</span> : Mechanical
                                    </p>
                                    <p className="font-semibold text-xl">
                                    <span className="font-bold text-2xl">Percentage</span> :65%
                                    </p>
                                    <p className="font-semibold text-xl">
                                    <span className="font-bold text-2xl">Year Of Graduation</span> :2012-2016
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#daced2] rounded-xl w-fit lg:w-[50%] shadow-zinc-600 flex justify-center items-center p-5'>
                            <div className="w-full">
                                <div className="flex justify-around items-center p-4">
                                    <img
                                    src="https://i.ibb.co/4tP27SP/images.jpg"
                                    className="h-[60px] w-[120px] md:h-[100px] md:w-[200px] rounded-full"
                                    alt="logo-pic"
                                    />
                                    <h1 className={`${fontColor} font-bold text-2xl lg:text-5xl`}>Intermediate</h1>
                                </div>
                                <hr className='h-1 w-full bg-gray-500'/>
                                <div className="text-left lg:ml-10">
                                    <p className="font-semibold text-xl">
                                    <span className="font-bold text-2xl">College Name</span> : R K Junior College
                                    </p>
                                    <p className="font-semibold text-xl">
                                    <span className="font-bold text-2xl"> Branch</span> : M.P.C
                                    </p>
                                    <p className="font-semibold text-xl">
                                    <span className="font-bold text-2xl">Percentage</span> :87%
                                    </p>
                                    <p className="font-semibold text-xl">
                                    <span className="font-bold text-2xl">Year Of Graduation</span> :2010-2012
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#daced2] rounded-xl w-[90%] lg:w-[50%] shadow-zinc-600 flex justify-center items-center p-5'>
                            <div className="w-full">
                                <div className="flex justify-around items-center p-4">
                                    <img
                                    src={'/photos/nxtwave.jpg'}
                                    className="h-[60px] w-[120px] md:h-[100px] md:w-[200px] rounded-full"
                                    alt="logo-pic"
                                    />
                                    <h1 className={`${fontColor} font-bold text-2xl lg:text-5xl`}>Full Stack Developer</h1>
                                </div>
                                <hr className='h-1 w-full bg-gray-500'/>
                                <div className="text-left lg:ml-10">
                                    <p className="font-semibold text-xl">
                                    <span className="font-bold text-2xl">Institute Name</span> : NxtWave 
                                    </p>
                                    <p className="font-semibold text-xl">
                                    <span className="font-bold text-2xl"> Course</span> : Python Full Stack Developer
                                    </p>
                                    <p className="font-semibold text-xl">
                                    <span className="font-bold text-2xl">Skills</span> :HTML, CSS, Bootstrap, JS, Python,ReactJS,<br/>NodeJS,ExpressJS,SQL
                                    </p>
                                    <p className="font-semibold text-xl">
                                    <span className="font-bold text-2xl">Start</span> :sep 2022  On Going
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </center>
        </div>
    </div>
  )
}

export default Projects