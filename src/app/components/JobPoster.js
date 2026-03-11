
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


export default function JobPoster({poster}) {
  console.log("poster,,,,,,,,",poster)
  return (
   <section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto ">

    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
{
  poster?.map((item)=>(
  <SwiperSlide className="flex justify-center items-center" key={item?._id}>
  <img
    src={item?.image}
    alt="Job Poster"
    className="w-[260px] sm:w-[320px] md:w-[400px] lg:w-auto h-auto rounded-lg shadow-lg"
  />
</SwiperSlide>

  ))
}
   

     

    </Swiper>

  </div>
</section>
  );
}

