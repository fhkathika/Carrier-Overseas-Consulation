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
  className="relative min-vh-100 d-flex align-items-center"
  style={{
    backgroundImage: "url('/coc_bg_sample6update2.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
      {/* Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

       <div className="container relative text-center text-white z-2 mt-90">

        <div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="display-4 pt-3"
          >
           From dreams to destinations... we are here!
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="fs-5"
          >
           Take the first step today! Turning dreams into real opportunities!
          </motion.p>

          {/* Buttons */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-4"
          >
            <a className="btn btn-light m-1" href="#">
              Order our services now
            </a>

            <a className="btn btn-outline-light m-1" href="#">
              Explore core features
            </a>
          </motion.div> */}

        </div>
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