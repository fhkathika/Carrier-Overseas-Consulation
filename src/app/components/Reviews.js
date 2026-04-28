  "use client"

  import { useEffect, useState } from "react";
  import { Swiper, SwiperSlide } from 'swiper/react';
  import "yet-another-react-lightbox/styles.css"
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/grid';
  import 'swiper/css/pagination';
  import '../style.css'
  import { motion } from "framer-motion"
  import { Autoplay, Grid, Pagination } from 'swiper/modules';
  export default function Reviews() {
      const [reviews, setReviews] = useState([]);
      async function getReview() {
      try {
        const res = await fetch("/api/createReview");
        const data = await res.json();
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      getReview();
    }, []);
    const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25
    }
  }
}
const itemLeft =  {
  hidden: { opacity: 0, x: -100 }, // 👈 from LEFT
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}
    return (
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-2xl md:text-4xl font-bold  mb-2 sm:mb-10">
        What Our Clients Say
          </h2>
<motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
 viewport={{ once: false,amount:0.3 }}
>
  <motion.div variants={itemLeft}>
          <div className="relative w-full overflow-hidden">
            {/* <div className="flex animate-scroll gap-8 w-max">

              {reviews?.map((item, index) => (
                <div
                  key={index}
                  className="min-w-[300px] bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold mb-2">{item?.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item?.comment}</p>
                  <div className={`text-xl "text-yellow-500" `}>
  {Array.from({ length: item?.rating }, (_, i) => (
        <span key={i} className="text-yellow-500">★</span>
      ))}
      {Array.from({ length: 5 - item?.rating }, (_, i) => (
        <span key={i} className="text-gray-300">★</span>
      ))}
                  </div>
                </div>
              ))}

            </div> */}

              <Swiper
                    slidesPerView={3}
                  
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={{
                        delay:3000,
                        disableOnInteraction:false
                    }}
                      breakpoints={{
      0: {
        slidesPerView: 1, // 📱 mobile
      },
      640: {
        slidesPerView: 1, // small devices
      },
      768: {
        slidesPerView: 2, // tablets
      },
      1024: {
        slidesPerView: 3, // desktop
      },
    }}
                    modules={[Grid, Pagination,Autoplay]}
                  className='swiper-pagination'
                  >
                  {reviews?.map((item,index)=>(
            <SwiperSlide className="flex items-center justify-center " key={index} >
                <div
                  key={index}
                  className="w-full bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold mb-2">{item?.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item?.comment}</p>
                  <div className={`text-xl "text-yellow-500" `}>
  {Array.from({ length: item?.rating }, (_, i) => (
        <span key={i} className="text-yellow-500">★</span>
      ))}
      {Array.from({ length: 5 - item?.rating }, (_, i) => (
        <span key={i} className="text-gray-300">★</span>
      ))}
                  </div>
                </div>
              </SwiperSlide>
                    ))}
                  
                  </Swiper>
          </div>
</motion.div>
</motion.div>
        </div>
      </section>
    )
  }