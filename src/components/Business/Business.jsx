import React from 'react'
import { colorChange } from '../change/colorChange'
import { changeBg } from '../change/change'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {MdComment} from "react-icons/md"
import {AiFillLike} from "react-icons/ai"


const Business = () => {
    const lightMode=changeBg((state)=>state.lightMode)
  const textColor=colorChange((state)=>state.textColor)
  const fontColor=colorChange((state)=>state.fontColor)
  return (
    <div className={`${lightMode?"bg-white":"bg-black"} mb-8 px-5`}>
        <h1 className={`${fontColor} font-bold text-3xl font-sans`}>Business Development</h1>
        <p className={`${lightMode?"text-black":"text-white"} text-[20px] font-semibold`}>My publications you love it to read and i have written it from my heart</p>
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
                        <div className='rounded-lg shadow-xl overflow-hidden relative w-[80%] lg:w-[40%]'>
                            <div className=''>
                                <img src="https://www.metricmarketing.com/wp-content/uploads/2021/09/Metric_Blog_ImprtanceSEO-1.png.webp" className='rounded-lg' alt=""/>
                            </div>
                            <div className={`absolute rounded-lg top-[235px] hover:top-0 w-[100%] h-[100%] duration-1000 bg-white`}>
                                <div className='flex justify-around w-[100%] p-4'>
                                    <div className='flex mr-4 w-[50%]'>
                                        <p className={`${fontColor} font-bold text-lg`}>Des 20,2021</p>
                                    </div>
                                    <div className='flex mr-4'>
                                        <MdComment className={`${fontColor} text-xl font-bold mt-1`}/>
                                        <p className={`${fontColor} text-lg font-bold`}>11</p>
                                    </div>
                                    <div className='flex'>
                                        <AiFillLike className={`${fontColor} text-xl font-bold mt-1`}/>
                                        <p className={`${fontColor} text-lg font-bold`}>20</p>
                                    </div>
                                </div>
                                <p className={`text-black w-[80%] font-semibold ml-6`}>
                                    If you haver ever had a conversation about digital marketing techniques, you've probably heard the term SEO tossed around. You....
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='rounded-lg shadow-xl overflow-hidden relative w-[80%] lg:w-[40%]'>
                            <div className=''>
                                <img src="https://media.sproutsocial.com/uploads/2020/08/12-Social-Media-Marketing-Strategy.svg" className='rounded-lg h-[300px]' alt=""/>
                            </div>
                            <div className={`absolute rounded-lg top-[235px] hover:top-0 w-[100%] h-[100%] duration-1000 bg-white`}>
                                <div className='flex justify-around w-[100%] p-4'>
                                    <div className='flex mr-4 w-[50%]'>
                                        <p className={`${fontColor} font-bold text-lg`}>June 20,2022</p>
                                    </div>
                                    <div className='flex mr-4'>
                                        <MdComment className={`${fontColor} text-xl font-bold mt-1`}/>
                                        <p className={`${fontColor} text-lg font-bold`}>11</p>
                                    </div>
                                    <div className='flex'>
                                        <AiFillLike className={`${fontColor} text-xl font-bold mt-1`}/>
                                        <p className={`${fontColor} text-lg font-bold`}>20</p>
                                    </div>
                                </div>
                                <p className={`text-black w-[80%] font-semibold ml-6`}>
                                    If you haver ever had a conversation about digital marketing techniques, you've probably heard the term SEO tossed around. You....
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='rounded-lg shadow-xl overflow-hidden relative w-[80%] lg:w-[40%]'>
                            <div className=''>
                                <img src="https://www.metricmarketing.com/wp-content/uploads/2021/09/Metric_Blog_ImprtanceSEO-1.png.webp" className='rounded-lg' alt=""/>
                            </div>
                            <div className={`absolute rounded-lg top-[235px] hover:top-0 w-[100%] h-[100%] duration-1000 bg-white`}>
                                <div className='flex justify-around w-[100%] p-4'>
                                    <div className='flex mr-4 w-[50%]'>
                                        <p className={`${fontColor} font-bold text-lg`}>Des 20,2021</p>
                                    </div>
                                    <div className='flex mr-4'>
                                        <MdComment className={`${fontColor} text-xl font-bold mt-1`}/>
                                        <p className={`${fontColor} text-lg font-bold`}>11</p>
                                    </div>
                                    <div className='flex'>
                                        <AiFillLike className={`${fontColor} text-xl font-bold mt-1`}/>
                                        <p className={`${fontColor} text-lg font-bold`}>20</p>
                                    </div>
                                </div>
                                <p className={`text-black w-[80%] font-semibold ml-6`}>
                                    If you haver ever had a conversation about digital marketing techniques, you've probably heard the term SEO tossed around. You....
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='rounded-lg shadow-xl overflow-hidden relative w-[80%] lg:w-[40%]'>
                            <div className=''>
                                <img src="https://media.sproutsocial.com/uploads/2020/08/12-Social-Media-Marketing-Strategy.svg" className='rounded-lg h-[300px]' alt=""/>
                            </div>
                            <div className={`absolute rounded-lg top-[235px] hover:top-0 w-[100%] h-[100%] duration-1000 bg-white`}>
                                <div className='flex justify-around w-[100%] p-4'>
                                    <div className='flex mr-4 w-[50%]'>
                                        <p className={`${fontColor} font-bold text-lg`}>June 20,2022</p>
                                    </div>
                                    <div className='flex mr-4'>
                                        <MdComment className={`${fontColor} text-xl font-bold mt-1`}/>
                                        <p className={`${fontColor} text-lg font-bold`}>11</p>
                                    </div>
                                    <div className='flex'>
                                        <AiFillLike className={`${fontColor} text-xl font-bold mt-1`}/>
                                        <p className={`${fontColor} text-lg font-bold`}>20</p>
                                    </div>
                                </div>
                                <p className={`text-black w-[80%] font-semibold ml-6`}>
                                    If you haver ever had a conversation about digital marketing techniques, you've probably heard the term SEO tossed around. You....
                                </p>
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
                        <div className='rounded-lg shadow-xl overflow-hidden relative w-[80%] lg:w-[80%]'>
                            <div className=''>
                                <img src="https://www.metricmarketing.com/wp-content/uploads/2021/09/Metric_Blog_ImprtanceSEO-1.png.webp" className='rounded-lg' alt=""/>
                            </div>
                            <div className={`absolute rounded-lg top-[235px] hover:top-0 w-[100%] h-[100%] duration-1000 bg-white`}>
                                <div className='flex justify-around w-[100%] p-4'>
                                    <div className='flex mr-4 w-[50%]'>
                                        <p className={`${fontColor} font-bold text-lg`}>Des 20,2021</p>
                                    </div>
                                    <div className='flex mr-4'>
                                        <MdComment className={`${fontColor} text-xl font-bold mt-1`}/>
                                        <p className={`${fontColor} text-lg font-bold`}>11</p>
                                    </div>
                                    <div className='flex'>
                                        <AiFillLike className={`${fontColor} text-xl font-bold mt-1`}/>
                                        <p className={`${fontColor} text-lg font-bold`}>20</p>
                                    </div>
                                </div>
                                <p className={`text-black w-[80%] font-semibold ml-6`}>
                                    If you haver ever had a conversation about digital marketing techniques, you've probably heard the term SEO tossed around. You....
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='rounded-lg shadow-xl overflow-hidden relative w-[80%] lg:w-[80%]'>
                            <div className=''>
                                <img src="https://media.sproutsocial.com/uploads/2020/08/12-Social-Media-Marketing-Strategy.svg" className='rounded-lg h-[300px]' alt=""/>
                            </div>
                            <div className={`absolute rounded-lg top-[235px] hover:top-0 w-[100%] h-[100%] duration-1000 bg-white`}>
                                <div className='flex justify-around w-[100%] p-4'>
                                    <div className='flex mr-4 w-[50%]'>
                                        <p className={`${fontColor} font-bold text-lg`}>June 20,2022</p>
                                    </div>
                                    <div className='flex mr-4'>
                                        <MdComment className={`${fontColor} text-xl font-bold mt-1`}/>
                                        <p className={`${fontColor} text-lg font-bold`}>11</p>
                                    </div>
                                    <div className='flex'>
                                        <AiFillLike className={`${fontColor} text-xl font-bold mt-1`}/>
                                        <p className={`${fontColor} text-lg font-bold`}>20</p>
                                    </div>
                                </div>
                                <p className={`text-black w-[80%] font-semibold ml-6`}>
                                    If you haver ever had a conversation about digital marketing techniques, you've probably heard the term SEO tossed around. You....
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='rounded-lg shadow-xl overflow-hidden relative w-[80%] lg:w-[80%]'>
                            <div className=''>
                                <img src="https://www.metricmarketing.com/wp-content/uploads/2021/09/Metric_Blog_ImprtanceSEO-1.png.webp" className='rounded-lg' alt=""/>
                            </div>
                            <div className={`absolute rounded-lg top-[235px] hover:top-0 w-[100%] h-[100%] duration-1000 bg-white`}>
                                <div className='flex justify-around w-[100%] p-4'>
                                    <div className='flex mr-4 w-[50%]'>
                                        <p className={`${fontColor} font-bold text-lg`}>Des 20,2021</p>
                                    </div>
                                    <div className='flex mr-4'>
                                        <MdComment className={`${fontColor} text-xl font-bold mt-1`}/>
                                        <p className={`${fontColor} text-lg font-bold`}>11</p>
                                    </div>
                                    <div className='flex'>
                                        <AiFillLike className={`${fontColor} text-xl font-bold mt-1`}/>
                                        <p className={`${fontColor} text-lg font-bold`}>20</p>
                                    </div>
                                </div>
                                <p className={`text-black w-[80%] font-semibold ml-6`}>
                                    If you haver ever had a conversation about digital marketing techniques, you've probably heard the term SEO tossed around. You....
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='rounded-lg shadow-xl overflow-hidden relative w-[80%] lg:w-[80%]'>
                            <div className=''>
                                <img src="https://media.sproutsocial.com/uploads/2020/08/12-Social-Media-Marketing-Strategy.svg" className='rounded-lg h-[300px]' alt=""/>
                            </div>
                            <div className={`absolute rounded-lg top-[235px] hover:top-0 w-[100%] h-[100%] duration-1000 bg-white`}>
                                <div className='flex justify-around w-[100%] p-4'>
                                    <div className='flex mr-4 w-[50%]'>
                                        <p className={`${fontColor} font-bold text-lg`}>June 20,2022</p>
                                    </div>
                                    <div className='flex mr-4'>
                                        <MdComment className={`${fontColor} text-xl font-bold mt-1`}/>
                                        <p className={`${fontColor} text-lg font-bold`}>11</p>
                                    </div>
                                    <div className='flex'>
                                        <AiFillLike className={`${fontColor} text-xl font-bold mt-1`}/>
                                        <p className={`${fontColor} text-lg font-bold`}>20</p>
                                    </div>
                                </div>
                                <p className={`text-black w-[80%] font-semibold ml-6`}>
                                    If you haver ever had a conversation about digital marketing techniques, you've probably heard the term SEO tossed around. You....
                                </p>
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