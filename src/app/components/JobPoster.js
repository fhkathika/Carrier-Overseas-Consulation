
"use client"
// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// // import './styles.css';

// // import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';

// export default function JobPoster() {
//   return (
//      <section className='py-16  bg-gray-50'>
//        <div  className='max-w-6xl mx-auto'>
//   <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="jobPoster-slide"
//       >
//         <SwiperSlide>
//           <img src="/job-poster.jpg" />
//         </SwiperSlide>
        
//         <SwiperSlide>
//           <img src="/job-poster.jpg" />
//         </SwiperSlide>
        
       
//       </Swiper>
   

//        </div>
    
// </section>
//   );
// }


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Zoom from "yet-another-react-lightbox/plugins/zoom"


export default function JobPoster({poster}) {
  const [open,setOpen]=useState(false)
     const [index,setIndex]=useState(0)
  return (
   <section className="py-16 bg-gray-50">
    <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12'>
    <h3 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center'>
   Current Job Openings
    </h3>
  </div>
  <div className="max-w-6xl mx-auto ">

    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
{
  poster?.map((item,i)=>(
  <SwiperSlide className="flex justify-center items-center" key={i}>
  <img
    src={item?.image}
    alt="Job Poster"
    className="w-auto sm:w-[320px] md:w-[400px] lg:w-auto h-auto rounded-lg shadow-lg"
     onClick={()=>{setIndex(i);setOpen(true)}}
  />
</SwiperSlide>


  ))
}
   

     

    </Swiper>

  </div>
    {
         open &&(
             <Lightbox
             slides={poster?.map(item=>({src:item?.image}))}
             open={open}
             index={index}
             close={()=>setOpen(false)}
             plugins={[Zoom]}
             />
         )
       }
</section>
  );
}

