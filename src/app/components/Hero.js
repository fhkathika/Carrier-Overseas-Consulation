"use client"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import Image from "next/image"
export default function Hero() {
  const heroImages = [
  {
    id: 1,
    src: "/slider_image1.jpg",
  },
  {
    id: 2,
    src: "/slider-2.png",
  },
  {
    id: 3,
    src: "/slider-3.png",
  },
  {
    id: 4,
    src: "/slider-4.png",
  },
  {
    id: 5,
    src: "/slider-5.png",
  },
];
  return (
<section
  className="position-relative d-flex align-items-center"
  style={{ height: '100vh' }}   
>
  
  {/* Background Image */}
  <Image
    src="/coc_bg_sample6update.png"
    alt="Hero background"
    fill
   
    style={{ objectFit: 'cover', zIndex: 0 }}
    quality={80}
     priority
  />

  {/* Overlay */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1,
    }}
  />

  {/* Content */}
  <div
    className="container text-center text-white position-relative"
    style={{ zIndex: 2 }}
  >
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="display-4 pt-50"
    >
      From dreams to destinations... we are here!
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="fs-5"
    >
      Take the first step today! Turning dreams into real opportunities!
    </motion.p>
  </div>

</section>
  )
}


 {/* <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    loop
    autoplay={{ delay: 4000 }}
    navigation
    pagination={{ clickable: true }}
    slidesPerView={1}
    className="h-full"
  >
    {heroImages.map((img) => (
      <SwiperSlide key={img.id}>
    
      </SwiperSlide>
    ))}
  </Swiper> */}