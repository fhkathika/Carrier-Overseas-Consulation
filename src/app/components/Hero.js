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
<section className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen">
  <Image
    src="/coc_bg_sample6.png"
    alt="Hero"
    fill
    priority
    sizes="100vw"
    className="object-content"
  />

  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-end text-center px-4 pb-15 ">
    
    <motion.h1
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-white text-2xl sm:text-3xl md:text-5xl font-bold leading-tight"
    >
      From dreams to destinations — we are here!
    </motion.h1>

    <motion.p
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="mt-4 sm:mt-6 text-white text-base sm:text-lg md:text-2xl font-medium"
    >
      Take the first step today!
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