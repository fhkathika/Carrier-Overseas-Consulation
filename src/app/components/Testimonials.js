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
<div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12 py-5 items-center'>
    <h3 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center py-5'>
     Our Client Appriciation Letter
    </h3>
  
   <Swiper
        slidesPerView={2}
       
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay:3000,
            disableOnInteraction:false
        }}
        modules={[Grid, Pagination,Autoplay]}
       className='swiper-pagination'
      >
      {all_certificates?.map((item,i)=>(
<SwiperSlide className="flex items-center justify-center " key={i} >
    <img src={item?.src} 
      alt={`certificate${i+1}`}
  className="w-auto max-h-[800px] sm:max-h-[900px] lg:max-h-[1000px] object-cover mx-auto"
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

     {/* <div
  id="centered"
  data-carousel='{ "loadingClasses": "opacity-0", "isCentered": true, "slidesQty": { "xs": 1, "lg": 2 } }'
  className="relative w-full"
>
  <div className="carousel h-80">
    <div className="carousel-body h-full opacity-0">
    
      <div className="carousel-slide px-1">
        <div className="bg-base-200/50 flex h-full justify-center p-6">
          <span className="self-center text-lg">First slide</span>
        </div>
      </div>
     
      <div className="carousel-slide px-1">
        <div className="bg-base-200 flex h-full justify-center p-6">
          <span className="self-center text-lg">Second slide</span>
        </div>
      </div>
   
      <div className="carousel-slide px-1">
        <div className="bg-base-200 flex h-full justify-center p-6">
          <span className="self-center text-lg">Third slide</span>
        </div>
      </div>
   
      <div className="carousel-slide px-1">
        <div className="bg-base-200/50 flex h-full justify-center p-6">
          <span className="self-center text-lg">Fourth slide</span>
        </div>
      </div>
    
      <div className="carousel-slide px-1">
        <div className="bg-base-200 flex h-full justify-center p-6">
          <span className="self-center text-lg">Fifth slide</span>
        </div>
      </div>
  
      <div className="carousel-slide px-1">
        <div className="bg-base-200 flex h-full justify-center p-6">
          <span className="self-center text-lg">Sixth slide</span>
        </div>
      </div>
    </div>
  </div>


   <button type="button" className="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span className="icon-[tabler--chevron-left] size-5 cursor-pointer"></span>
    <span className="sr-only">Previous</span>
  </button>

   <button type="button" className="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span className="icon-[tabler--chevron-right] size-5"></span>
    <span className="sr-only">Next</span>
  </button>
</div> */}
      </div>
  
   </section>
  )
}
