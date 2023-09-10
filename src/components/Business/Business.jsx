import React from 'react'
import { colorChange } from '../change/colorChange'
import { changeBg } from '../change/change'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Business = () => {
    const lightMode=changeBg((state)=>state.lightMode)
  const textColor=colorChange((state)=>state.textColor)
  const fontColor=colorChange((state)=>state.fontColor)
  return (
    <div className={`${lightMode?"bg-white":"bg-black"} mb-8 px-5`}>
        <h1 className={`${fontColor} font-bold text-3xl font-sans`}>Work Experience</h1>
        <p className={`${lightMode?"text-black":"text-white"} text-[20px] font-semibold`}>I have non IT related experience in various compenies and Now i am doing internship in Dignity Of Nobel</p>
        <div className={`flex justify-center overflow-hidden mt-5`}>
            <div className='lg:hidden w-[70%]'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    >
                    <SwiperSlide>
                        <div className='group rounded-lg shadow-xl overflow-hidden relative h-[300px] w-[80%] lg:w-[80%]'>
                            <div className=''>
                                <img src={"/photos/Divis.jpg"} className='rounded-lg w-full h-[230px]' alt=""/>
                            </div>
                            <div className={`absolute rounded-lg top-[200px] group-hover:top-0 w-[100%] h-[100%] duration-1000 bg-white overflow-auto`}>
                                <div className='flex justify-between w-[100%] p-2'>
                                    <div className=''>
                                        <p className={`${fontColor} font-bold text-lg`}>May 2018</p>
                                    </div>
                                    <div className=''>
                                        <p className={`${fontColor} font-bold text-lg`}>Jan 2021</p>
                                    </div>
                                </div>
                                <p className={`text-black w-[80%] font-semibold ml-6`}>
                                    Following production Raw materail indents and following maintenance of production equipments and preventive maintenance of prodction equipments. I did worked with my team members. 
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='group rounded-lg shadow-xl overflow-hidden relative w-[80%] lg:w-[80%]'>
                            <div className=''>
                                <img src={"/photos/sensacore.webp"} className='rounded-lg w-full h-[300px]' alt=""/>
                            </div>
                            <div className={`absolute rounded-lg top-[200px] group-hover:top-0 w-[100%] h-[100%] duration-1000 bg-white overflow-auto`}>
                                <div className='flex justify-between w-[100%] p-4'>
                                    <div className=''>
                                        <p className={`${fontColor} font-bold text-lg`}>May 2021</p>
                                    </div>
                                    <div className=''>
                                        <p className={`${fontColor} font-bold text-lg`}>Feb 2023</p>
                                    </div>
                                </div>
                                <p className={`text-black w-[80%] font-semibold ml-6`}>
                                    In this organization , I did take charges of one of the division Visakhapatnam and role is Bio Medical Sales and Service engineer.I did worked on ABG analysers,electrolytes and CBC mechines sales and service.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='group rounded-lg shadow-xl overflow-hidden relative w-[80%] lg:w-[80%]'>
                            <div className=''>
                                <img src={"/photos/tech.jpg"} className='rounded-lg' alt=""/>
                            </div>
                            <div className={`absolute rounded-lg top-[200px] group-hover:top-0 w-[100%] h-[100%] duration-1000 bg-white overflow-auto`}>
                                <div className='flex justify-between w-[100%] p-4'>
                                    <div className=''>
                                        <p className={`${fontColor} font-bold text-lg`}>Sep 2022</p>
                                    </div>
                                    <div className=''>
                                        <p className={`${fontColor} font-bold text-lg`}>On Going</p>
                                    </div>
                                </div>
                                <p className={`text-black w-[80%] font-semibold ml-6`}>
                                    I am learning full stack development course in the organization of NEXT WAVE ccbp. I have some hands on experience on frontend and backend skills. I have some course completion certificates HTML, CSS, BOOTSTRAP, JS, React JS, Node JS.  
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='group rounded-lg shadow-xl overflow-hidden relative w-[80%] lg:w-[80%]'>
                            <div className=''>
                                <img src={"/photos/dignityOfNobel.jpg"} className='rounded-lg h-[300px]' alt=""/>
                            </div>
                            <div className={`absolute rounded-lg top-[200px] group-hover:top-0 w-[100%] h-[100%] duration-1000 bg-white overflow-auto`}>
                                <div className='flex justify-between w-[100%] p-4'>
                                    <div className=''>
                                        <p className={`${fontColor} font-bold text-lg`}>June 2023</p>
                                    </div>
                                    <div className=''>
                                        <p className={`${fontColor} font-bold text-lg`}>On Going</p>
                                    </div>
                                </div>
                                <p className={`text-black w-[80%] font-semibold ml-6`}>I joined internship in the Dignity Of Nobel.During my internship at Dignity Of Nobel, I had the opportunity to work extensively with React.js and learned how to implement state management using Redux and Redux Toolkit."I was responsible for developing various components and user interfaces using React.js. </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    ...
                </Swiper>
            </div>
            <div className='hidden lg:block w-[70%]'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    >
                    <SwiperSlide>
                        <div className='group rounded-lg shadow-xl overflow-hidden relative h-[300px] w-[80%] lg:w-[80%]'>
                            <div className=''>
                                <img src={"/photos/Divis.jpg"} className='rounded-lg w-full h-[230px]' alt=""/>
                            </div>
                            <div className={`absolute rounded-lg top-[200px] group-hover:top-0 w-[100%] h-[100%] duration-1000 bg-white overflow-auto`}>
                                <div className='flex justify-between w-[100%] p-2'>
                                    <div className=''>
                                        <p className={`${fontColor} font-bold text-lg`}>May 2018</p>
                                    </div>
                                    <div className=''>
                                        <p className={`${fontColor} font-bold text-lg`}>Jan 2021</p>
                                    </div>
                                </div>
                                <p className={`text-black w-[80%] font-semibold ml-6`}>
                                    Following production Raw materail indents and following maintenance of production equipments and preventive maintenance of prodction equipments. I did worked with my team members. 
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='group rounded-lg shadow-xl overflow-hidden relative w-[80%] lg:w-[80%]'>
                            <div className=''>
                                <img src={"/photos/sensacore.webp"} className='rounded-lg w-full h-[300px]' alt=""/>
                            </div>
                            <div className={`absolute rounded-lg top-[200px] group-hover:top-0 w-[100%] h-[100%] duration-1000 bg-white overflow-auto`}>
                                <div className='flex justify-between w-[100%] p-4'>
                                    <div className=''>
                                        <p className={`${fontColor} font-bold text-lg`}>May 2021</p>
                                    </div>
                                    <div className=''>
                                        <p className={`${fontColor} font-bold text-lg`}>Feb 2023</p>
                                    </div>
                                </div>
                                <p className={`text-black w-[80%] font-semibold ml-6`}>
                                    In this organization , I did take charges of one of the division Visakhapatnam and role is Bio Medical Sales and Service engineer.I did worked on ABG analysers,electrolytes and CBC mechines sales and service.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='group rounded-lg shadow-xl overflow-hidden relative w-[80%] lg:w-[80%]'>
                            <div className=''>
                                <img src={"/photos/tech.jpg"} className='rounded-lg' alt=""/>
                            </div>
                            <div className={`absolute rounded-lg top-[200px] group-hover:top-0 w-[100%] h-[100%] duration-1000 bg-white overflow-auto`}>
                                <div className='flex justify-between w-[100%] p-4'>
                                    <div className=''>
                                        <p className={`${fontColor} font-bold text-lg`}>Sep 2022</p>
                                    </div>
                                    <div className=''>
                                        <p className={`${fontColor} font-bold text-lg`}>On Going</p>
                                    </div>
                                </div>
                                <p className={`text-black w-[80%] font-semibold ml-6`}>
                                    I am learning full stack development course in the organization of NEXT WAVE ccbp. I have some hands on experience on frontend and backend skills. I have some course completion certificates HTML, CSS, BOOTSTRAP, JS, React JS, Node JS.  
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='group rounded-lg shadow-xl overflow-hidden relative w-[80%] lg:w-[80%]'>
                            <div className=''>
                                <img src={"/photos/dignityOfNobel.jpg"} className='rounded-lg h-[300px]' alt=""/>
                            </div>
                            <div className={`absolute rounded-lg top-[200px] group-hover:top-0 w-[100%] h-[100%] duration-1000 bg-white overflow-auto`}>
                                <div className='flex justify-between w-[100%] p-4'>
                                    <div className=''>
                                        <p className={`${fontColor} font-bold text-lg`}>June 2023</p>
                                    </div>
                                    <div className=''>
                                        <p className={`${fontColor} font-bold text-lg`}>On Going</p>
                                    </div>
                                </div>
                                <p className={`text-black w-[80%] font-semibold ml-6`}>I joined internship in the Dignity Of Nobel.During my internship at Dignity Of Nobel, I had the opportunity to work extensively with React.js and learned how to implement state management using Redux and Redux Toolkit."I was responsible for developing various components and user interfaces using React.js. </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    ...
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Business