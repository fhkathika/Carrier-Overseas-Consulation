"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Zoom from "yet-another-react-lightbox/plugins/zoom"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import '../style.css'
// import required modules
import { Autoplay, Grid, Pagination } from 'swiper/modules';
import all_certificates from '@/data/all_certificates';
import Image from 'next/image';

export default function Testimonials() {
    const [open,setOpen]=useState(false)
    const [index,setIndex]=useState(0)
  return (
   <section className='py-16 bg-gray-100 max-w-7xl mx-auto  px-6 '>
 
    
   

      <div className="max-w-5xl mx-auto px-6 mt-6 text-center">
                 <h2 className="text-3xl md:text-4xl font-bold mb-10 ">
                Cetegory Wise Total Manpower Mobilized Throughly COCL(2000-2024)
                    </h2>
            
                 <div className='relative w-full aspect-[16/9]   flex justify-center'>
                  <Image
                  src="/categorywiseManpowercopy2part2.png"
                  alt="About Us"
                  width={700}
              height={400}
                  className='object-container  '
                  />
            
                </div>
            
           
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-6 text-center">
                 <h2 className="text-3xl md:text-4xl font-bold mb-10 ">
                Total Manpower Mobilized Globally(2000-2024)
                    </h2>
            
                 <div className='relative w-full aspect-[16/9]   flex justify-center'>
                  <Image
                  src="/totalManpowerGloballycopy2.jpg"
                  alt="About Us"
                  width={900}
              height={400}
                  className='object-container shadow-lg '
                  />
            
                </div>
            
           
            </div>

             <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12 py-12 '>
    <h3 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center py-5'>
     Our Client Appriciation Letter
    </h3>
  
   <Swiper
        slidesPerView={3}
        grid={{
          rows: 1,
          fill:"row"
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay:3000,
            disableOnInteraction:false
        }}
        modules={[Grid, Pagination,Autoplay]}
        className="mySwiper"
      >
      {all_certificates?.map((item,i)=>(
   <SwiperSlide key={i}>
    <img src={item?.src} alt={`certificate${i+1}`}
    onClick={()=>{setIndex(i); setOpen(true)}}
    />
   </SwiperSlide>
        ))}
      
      </Swiper>
      {
        open &&(
            <Lightbox
            slides={all_certificates}
            open={open}
            index={index}
            close={()=>setOpen(false)}
            plugins={[Zoom]}
            />
        )
      }
      </div>
       
   </section>
  )
}
