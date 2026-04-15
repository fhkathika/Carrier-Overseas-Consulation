"use client"

import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"

import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Zoom from "yet-another-react-lightbox/plugins/zoom"

import all_certificates from "@/data/all_certificates"
import { motion } from "framer-motion"

export default function Testimonials() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] // smooth cubic-bezier
    }
  }
}
  return (
    <section className="py-10 bg-gray-100">
           <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
                      <motion.div variants={item}>
      
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-center mb-8">
          Our Client Appreciation Letter
        </h2>

        {/* SWIPER */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {all_certificates?.map((item, i) => (
            <SwiperSlide
              key={i}
              style={{ width: "280px" }} // 👈 IMPORTANT for coverflow
              className="flex justify-center"
            >
              <div
                className="bg-white rounded shadow p-3 cursor-pointer transition duration-300 hover:scale-105"
                onClick={() => {
                  setIndex(i)
                  setOpen(true)
                }}
              >
                <img
                  src={item?.src}
                  alt={`certificate-${i}`}
                  className="w-full h-[350px] object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* LIGHTBOX */}
        {open && (
          <Lightbox
            slides={all_certificates}
            open={open}
            index={index}
            close={() => setOpen(false)}
            plugins={[Zoom]}
          />
        )}
      </div>
       </motion.div>
                      </motion.div>
      
    </section>
  )
}