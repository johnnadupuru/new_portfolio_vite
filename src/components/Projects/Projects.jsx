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
            <p className={`${lightMode?"text-black":"text-white"} font-semibold`}>WHAT PEOPLE SAY</p>
            <h2 className={`${fontColor} font-bold text-3xl`}>Testimonials</h2>
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
                        <div className='bg-[#daced2] rounded-xl w-[70%] shadow-zinc-600 flex justify-center items-center p-5'>
                            <div>
                                <p className='font-semibold text-[16px]'>"Globallyz is simply the best. Their team is incredibly talented and has a deep understanding of the marketing landscape. They've helped us build our brand from the ground up and have been instrumental in our growth and success."</p>
                                <div className='flex'>
                                    <img src="https://media.licdn.com/dms/image/C4D03AQG_yC3CqZN4_Q/profile-displayphoto-shrink_400_400/0/1661936125512?e=1691020800&v=beta&t=k7GnEzITL5DfClf5mCejIStnF909gY7VLjsaMTmNQY8" className='rounded-full h-[100px] mr-3' alt=""/>
                                    <div className='mt-4'>
                                        <h3 className={`${fontColor} font-bold text-xl`}>Holden Caulfield</h3>
                                        <p className='text-black font-semibold text-lg'>UI DEVELOPER</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#daced2] rounded-xl w-[70%] shadow-zinc-600 flex justify-center items-center p-5'>
                            <div>
                                <p className='font-semibold text-[16px]'>"Globallyz is simply the best. Their team is incredibly talented and has a deep understanding of the marketing landscape. They've helped us build our brand from the ground up and have been instrumental in our growth and success."</p>
                                <div className='flex'>
                                    <img src="http://rainbowit.net/themes/imroz/wp-content/uploads/2021/09/team-01.jpg" className='rounded-full h-[100px] mr-3' alt=""/>
                                    <div className='mt-4'>
                                        <h3 className={`${fontColor} font-bold text-xl`}>Holden Caulfield</h3>
                                        <p className='text-black font-semibold text-lg'>UI DEVELOPER</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#daced2] rounded-xl w-[70%] shadow-zinc-600 flex justify-center items-center p-5'>
                            <div>
                                <p className='font-semibold text-[16px]'>"Globallyz is simply the best. Their team is incredibly talented and has a deep understanding of the marketing landscape. They've helped us build our brand from the ground up and have been instrumental in our growth and success."</p>
                                <div className='flex'>
                                    <img src="http://rainbowit.net/themes/imroz/wp-content/uploads/2021/09/team-01.jpg" className='rounded-full h-[100px] mr-3' alt=""/>
                                    <div className='mt-4'>
                                        <h3 className={`${fontColor} font-bold text-xl`}>Holden Caulfield</h3>
                                        <p className='text-black font-semibold text-lg'>UI DEVELOPER</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='bg-[#daced2] rounded-xl w-[70%] shadow-zinc-600 flex justify-center items-center p-5'>
                            <div>
                                <p className='font-semibold text-[16px]'>"Globallyz is simply the best. Their team is incredibly talented and has a deep understanding of the marketing landscape. They've helped us build our brand from the ground up and have been instrumental in our growth and success."</p>
                                <div className='flex'>
                                    <img src="https://media.licdn.com/dms/image/C4D03AQF_dETSxGskag/profile-displayphoto-shrink_400_400/0/1651202231057?e=1691020800&v=beta&t=8Ssdpf2-6I5WiiVxded8TTKegVnyU2Njdm9Fx6RXIeo" className='rounded-full h-[100px] mr-3' alt=""/>
                                    <div className='mt-4'>
                                        <h3 className={`${fontColor} font-bold text-xl`}>Holden Caulfield</h3>
                                        <p className='text-black font-semibold text-lg'>UI DEVELOPER</p>
                                    </div>
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