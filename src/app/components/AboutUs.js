"use client"
import Image from 'next/image'
import React from 'react'
import AboutFeatueSection from './AboutFeatueSection'
import { motion } from "framer-motion"


import Vision from './Vision'

export default function AboutUs() {
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
    <section className='py-5  view '>

  <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
                <motion.div variants={item}>
<AboutFeatueSection/>
                </motion.div>
                </motion.div>

 <Vision/>
              
  <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
                <motion.div variants={item}>
  
{/* organigation chart  */}
    <div className="max-w-7xl mx-auto px-6  text-center block">
   <h3 className="display-4 m-0">
              Our Organization Chart
            </h3>
   <div className=" ">
     <div className=' w-full '>
      <Image
      src="/Frame 2.png"
      alt="About Us"
      width={1200}
  height={500}
      className='object-container '
      />

    </div>

</div>
</div>
                </motion.div>
                </motion.div>




 {/* The founders */}
 <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
                <motion.div variants={item}>

             
 <section className="section bg-gray-100 py-5">
      <div className="container">

        {/* STEP 1 */}
        <div className="row justify-content-center align-items-center">
          <div className="col-xxl-5 col-lg-6 my-3">
            <Image
              src="/Founder Photo v2.png"
              alt="feature"
              width={500}
              height={400}
              className="img-fluid"
            />
          </div>

          <div className="col-xxl-5 col-lg-6 my-3 ps-xl-5">
            <h3 className="h1">The Founders</h3>
            <p>
               Three ambitious brothers, guided by their father, a retired senior government official, after completing their higher education in abroad and acquiring extensive experience and knowledge in various multinational organizations In abroad, they returned to Bangladesh with a firm determination to leverage their knowledge, expertise and network to benefit the nation's economy. Aspired to make a significant impact on Bangladesh's burgeoning industry in placement services, they have been established Career Overseas Consultants Ltd; is one of the subsidiary of Amed in Group
to provide an ethical placement services to meet the growing demand of world market for professional, skilled, semi skilled and general workers.
Alongside their father, they successfully established what is now known as the Amed Agin Group.
   
            </p>
          
          </div>
        </div>

        <div className="divider opacity-2 mx-auto w-60 my-5"></div>
</div>
</section>
   </motion.div>
                </motion.div>

<div className="text-center mt-10 mb-5">
  <a
    href="/Brochure _COCL.pdf"
    download="Brochure _COCL.pdf"
    className="bg-[#111827] text-white px-10 py-5 rounded-lg hover:bg-green-700 transition"
  >
    Download Our Brochure
  </a>
</div>
    </section>
  )
}
