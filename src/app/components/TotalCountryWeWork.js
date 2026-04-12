"use client";

import { FaBriefcase, FaColumns, FaCogs, FaMobileAlt, FaEnvelope, FaPenFancy, FaGlobeAsia } from "react-icons/fa";
import { motion } from "framer-motion"
export default function TotalCountryWeWork() {
  const features = [
    {
      icon: <FaBriefcase />,
      title: "Business Strategy",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
    {
      icon: <FaColumns />,
      title: "Website Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
    {
      icon: <FaCogs />,
      title: "Marketing & Reporting",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
    {
      icon: <FaPenFancy />,
      title: "Copywriting",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
  ];

  return (
    <section className="section bg-[#90A6BB] position-relative py-5">

  

      <div className="container position-relative ">
        <div className="row">
<div className=" d-flex justify-content-center align-items-center mb-4">
      <h1>
        COCL has mobilized candidates for the following countries
      </h1>
    </div>
     
     <div
  className="col-lg-12 position-relative rounded"
  style={{ minHeight: "700px" ,minWeight: "600px" }}
>
   

  {/* Background */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100 "
  
  >
 <img
  src="/asia_Map2.png"
  alt="asia"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "contain",

    WebkitMaskImage: `
      linear-gradient(to top, transparent 0%, black 15%, black 85%, transparent 100%),
      linear-gradient(to left, transparent 0%, black 15%, black 85%, transparent 100%)
    `,
    maskImage: `
      linear-gradient(to top, transparent 0%, black 15%, black 85%, transparent 100%),
      linear-gradient(to left, transparent 0%, black 15%, black 85%, transparent 100%)
    `,

    WebkitMaskComposite: "intersect",
    maskComposite: "intersect",
  }}
/>
  </div>

 
</div>

        </div>
      </div>
    </section>
  );
}

// import Image from 'next/image'
// import React from 'react'

// export default function TotalCountryWeWork() {
//   return (
//    <div className="max-w-6xl mx-auto px-6 mt-6 text-center">
//              <h2 className="max-w-6xl md:max-w-3xl text-1xl md:text-4xl font-bold bg-[#c1dff2] mx-auto  p-2  rounded-[50px_10px_50px_10px] mb-10 ">
//               Countries We Work
//                   </h2>
          
//                <div className='flex justify-center'>
//                 <Image
//                 src="/asia_M.png"
//                 alt="About Us"
//                 width={800}
//             height={600}
//                 className="w-full h-full object-cover shadow-xl rounded-full "
//                 />
          
//               </div>
          
         
//           </div>
//   )
// }
