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

export default function Testimonials() {
    const [open,setOpen]=useState(false)
    const [index,setIndex]=useState(0)
  return (
   <section className='py-16 bg-gray-100 max-w-7xl mx-auto  px-6'>
    <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12'>
    <h3 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center'>
     Our Client Appriciation Letter
    </h3>
  </div>
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
   </section>
  )
}
