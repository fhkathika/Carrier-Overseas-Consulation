"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay,Pagination } from "swiper/modules";
import { motion } from "framer-motion"
import { useRef, useState } from "react";
import Image from "next/image";
const client_logos = [];

for (let i = 3; i <= 178; i++) {
  client_logos.push({
    id: i,
    src: `/COCL Logos/${i}.jpg`,
  });
}

export default function ClientLogos() {
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
const swiperRef = useRef();
const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section
      className="section position-relative py-5"
      style={{
        backgroundImage: "url('/bg-banner-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
                <motion.div variants={item}>
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.1)",
        }}
      ></div>
 <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Our Global Partners
            </h2>
          <p className="text-muted">
          Trusted by over 178 of the world’s leading companies
          </p>
        </div>
      <div className="container position-relative border-4">
        <div className="row justify-content-center">
          <div className="col-xl-12 text-center">

          

            {/* Card */}
           
      <div className="container">

        <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
  modules={[Autoplay]}
  spaceBetween={20}
  slidesPerView={6}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  loop={true}
  breakpoints={{
    0: { slidesPerView: 3 },
    576: { slidesPerView: 4 },
    768: { slidesPerView: 4 },
    992: { slidesPerView: 6 },
  }}
  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
>
          {client_logos.map((logo, index) => (
            <SwiperSlide key={index}>
           
<div className="d-flex justify-content-center align-items-center p-2 card text-center logo-card">
  <Image
    src={logo?.src}
    alt="logo"
    width={65}
    height={65}
    style={{ objectFit: "contain" }}
    priority
  />
</div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
  
<div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
  
  {/* First 10 dots */}
  {Array.from({ length: 30 }).map((_, i) => (
    <div
      key={i}
      onClick={() => swiperRef.current?.slideTo(i * 17)}
      style={{
        width: activeIndex === i ? "9px" : "9px",
        height: activeIndex === i ? "9px" : "9px",
        borderRadius: "50%",
        background: activeIndex === i ? "#e82e31" : "#ccc",
        cursor: "pointer",
        transition: "0.3s",
      }}
    />
  ))}

  {/* Last number */}
  {/* <div
    onClick={() => swiperRef.current?.slideTo(177)}
    style={{
    
      color: activeIndex === 177 ? "#e82e31" : "#000",
      cursor: "pointer",
      fontSize: "12px",
    }}
  >
    178
  </div> */}

</div>
          </div>
        </div>
      </div>
      </motion.div>
      </motion.div>
    </section>
  );
}

// import React from "react";
// import Image from "next/image";
// //   { id: 1, src: "/clientLogoImg/img1.png" },
// //   { id: 2, src: "/clientLogoImg/img2.png" },
// //   { id: 3, src: "/clientLogoImg/img3.png" },
// //   { id: 4, src: "/clientLogoImg/img4.png" },
// //   { id: 5, src: "/clientLogoImg/img5.png" },
// //   { id: 6, src: "/clientLogoImg/img6.png" },
// //   { id: 7, src: "/clientLogoImg/img7.png" },
// //   { id: 8, src: "/clientLogoImg/img8.png" },
// //   { id: 9, src: "/clientLogoImg/img9.png" },
// // ];
// const client_logos = [];

// for (let i = 3; i <= 178; i++) {
//   client_logos.push({
//     id: i,
//     src: `/COCL Logos/${i}.jpg`
//   });
// }
// const chunkArray = (array, size) => {
//   const result = [];
//   for (let i = 0; i < array.length; i += size) {
//     result.push(array.slice(i, i + size));
//   }
//   return result;
// };

// const groupedLogos = chunkArray(client_logos, 4);

// export default function Client_Logo() {
//   return (
//     <div className="relative w-full overflow-hidden">
//       <div className="mx-auto mb-12">
//         <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center">
//           Our Clients
//         </h3>
//         <p className="text-center text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl bg-[#111827] py-2 mt-2">
//           We owe our steady and solid growth to the following esteemed companies
//         </p>
//       </div>

//    <div className="flex animate-scroll gap-4 w-max">
//   {groupedLogos.map((group, index) => (
//     <div key={index} className="min-w-[300px] p-2">
      
//       <div className="grid grid-cols-2 gap-4">
//         {group.map((item) => (
//           <Image
//             key={item.id}
//             src={item.src}
//             alt={`Client Logo ${item.id}`}
//             width={150}
//             height={80}
//             className="object-contain"
//           />
//         ))}
//       </div>

//     </div>
//   ))}
// </div>
//     </div>
//   );
// }

