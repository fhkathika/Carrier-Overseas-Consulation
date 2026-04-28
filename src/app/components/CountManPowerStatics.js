"use client"
import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from "framer-motion"
import Image from 'next/image'
export default function CountManPowerStatics() {
  
    const {ref,inView}=useInView({
triggerOnce:true,
threshold:0.3,
    })
    const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25
    }
  }
}

// const item = {
//   hidden: { opacity: 0, y: 60 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.25, 0.1, 0.25, 1] // smooth cubic-bezier
//     }
//   }
// }
const itemLeft =   {
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
       <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false ,amount:0.3 }}
          >
                    <motion.div variants={itemLeft}>
  <div className=" mx-auto p-6 mt-6 text-center bg-light">
  <h2 className="text-1xl md:text-4xl font-bold ">
    Category Wise Total Manpower Mobilized Through COCL (2001-2025)
  </h2>
    <p className="text-muted">
              24 Years of Excellence
          </p>
           <div className="w-full flex justify-center">
                <Image
                  src="/categoryWiseMobilizedUpdate.png"
                  alt="About Us"
                  width={1000}
                  height={900}
                  priority
                />
            
              </div>


</div>
 </motion.div>
 </motion.div>
  )
}



  // <div ref={ref} className="row g-4 justify-content-center">

  //   {/* CARD 1 */}
  //   <div className="col-lg-4 col-md-6">
  //     <div className="d-flex align-items-center justify-content-between p-4 bg-red-100 rounded h-100">

  //       {/* ICON */}
  //       <div className="d-flex align-items-center justify-content-center"
  //            style={{ width: "60px", height: "60px" }}>
  //         <img src="/workers (1).png" style={{ width: "40px", height: "40px", objectFit: "contain" }} />
  //       </div>

  //       {/* TEXT */}
  //       <div className="text-start text-[#e82e31]">
  //         <p className="text-xl font-bold mb-2">Labour</p>
  //         <p className="text-xl font-semibold">
  //           {inView && (
  //             <>
  //               <CountUp end={74} duration={2} />% |{" "}
  //               <CountUp end={97949} duration={2} separator="," />
  //             </>
  //           )}
  //         </p>
  //       </div>

  //     </div>
  //   </div>

  //   {/* CARD 2 */}
  //   <div className="col-lg-4 col-md-6">
  //     <div className="d-flex align-items-center justify-content-between p-4 bg-blue-100 rounded h-100">

  //       <div className="d-flex align-items-center justify-content-center"
  //            style={{ width: "60px", height: "60px" }}>
  //         <img src="/labor.png" style={{ width: "40px", height: "40px", objectFit: "contain" }} />
  //       </div>

  //       <div className="text-start text-[#2043aa]">
  //         <p className="text-xl font-bold mb-2">Skilled</p>
  //         <p className="text-xl font-semibold">
  //           {inView && (
  //             <>
  //               <CountUp end={21} duration={2} />% |{" "}
  //               <CountUp end={28505} duration={2} separator="," />
  //             </>
  //           )}
  //         </p>
  //       </div>

  //     </div>
  //   </div>

  //   {/* CARD 3 */}
  //   <div className="col-lg-4 col-md-6">
  //     <div className="d-flex align-items-center justify-content-between p-4 bg-green-100 rounded h-100">

  //       <div className="d-flex align-items-center justify-content-center"
  //            style={{ width: "60px", height: "60px" }}>
  //         <img src="/work-team.png" style={{ width: "40px", height: "40px", objectFit: "contain" }} />
  //       </div>

  //       <div className="text-start text-[#3abc43]">
  //         <p className="text-xl font-bold mb-2">Professional</p>
  //         <p className="text-xl font-semibold">
  //           {inView && (
  //             <>
  //               <CountUp end={5} duration={2} />% |{" "}
  //               <CountUp end={6851} duration={2} separator="," />
  //             </>
  //           )}
  //         </p>
  //       </div>

  //     </div>
  //   </div>

  // </div>