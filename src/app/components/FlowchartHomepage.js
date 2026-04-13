"use client"
import Image from 'next/image'
import React from 'react'
import TotalCountryWeWork from './TotalCountryWeWork'
import { motion } from "framer-motion"
import { FaUserTie, FaGlobeAsia, FaUsers, FaAward, FaBriefcase, FaColumns, FaBullhorn, FaMobileAlt} from "react-icons/fa";
import { FaGraduationCap, FaPlane, FaUserCheck, FaHospital, FaHeadset, FaExchangeAlt } from "react-icons/fa";
import { FaShieldAlt, FaBuilding, FaMapMarkerAlt, FaPlaneDeparture, FaTools } from "react-icons/fa";
import CandidateProcessChart from './CandidateProcessChart'

export default function FlowchartHomepage() {

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
    <section className='py-16 '>
<motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  <motion.div variants={item}>
 <section className="py-5">
      <div className="container">

        <div className="row">

          {/* Card 1 */}
          <div className="col-lg-4 my-3">
            <div className="d-flex py-4 px-3 shadow rounded hover-top">

              <div className="icon icon-lg  rounded-circle me-3 fs-3" style={{ color: "#ef8788" }} >
                <FaUsers />
              </div>

              <div>
                <h5>Global Manpower Supply</h5>
                <p className="mb-2">
                  COCL provides <b>technical, non-technical, and professional manpower</b> solutions to meet international client requirements across different countries.
                </p>
             
              </div>

            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 my-3">
            <div className="d-flex py-4 px-3 shadow rounded hover-top">

              <div className="icon icon-lg  rounded-circle me-3 fs-3" style={{ color: "#ef8788" }} >
                <FaGlobeAsia />
              </div>

              <div>
                <h5>International Recruitment Expertise</h5>
                <p className="mb-2">
                  With <b>two decades of experience</b>, COCL ensures proper selection of candidates using a <b>meticulous recruitment process</b>.
                </p>
            
              </div>

            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 my-3">
            <div className="d-flex py-4 px-3 shadow rounded hover-top">

              <div className="icon icon-lg  rounded-circle me-3 fs-3" style={{ color: "#ef8788" }} >
                <FaAward />
              </div>

              <div>
                <h5>Trusted & Government Recognized</h5>
                <p className="mb-2">
                  COCL is widely appreciated by clients and recognized by the <b>Government of Bangladesh (CIP status)</b>.
                </p>
            
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  </motion.div>
  
</motion.div>
<motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  <motion.div variants={item}>
    {/* manpower services  */}
    <section className="py-5 bg-light">
      <div className="container">

        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Manpower Services</h2>
          <p className="text-muted">
            Professional recruitment & global workforce solutions
          </p>
        </div>

        <div className="row align-items-center">

          {/* Left - Key Points */}
          <div className="col-lg-6">

            {/* Point 1 */}
            <div className="d-flex mb-4">
              <div className="me-3  fs-3" style={{ color: "#ef8788" }} >
                <FaUserTie />
              </div>
              <div>
                <h5 className="mb-1">Professional Recruitment</h5>
                <p className="text-muted mb-0">
                  Skilled selection of technical, non-technical and professional manpower.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="d-flex mb-4">
              <div className="me-3  fs-3" style={{ color: "#ef8788" }} >
                <FaGlobeAsia />
              </div>
              <div>
                <h5 className="mb-1">Global Workforce Supply</h5>
                <p className="text-muted mb-0">
                  Meeting international manpower demands across multiple countries.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="d-flex mb-4">
              <div className="me-3  fs-3" style={{ color: "#ef8788" }} >
                <FaUsers />
              </div>
              <div>
                <h5 className="mb-1">Expert Selection Team</h5>
                <p className="text-muted mb-0">
                  Highly trained managers ensure the right person for the right job.
                </p>
              </div>
            </div>

            {/* Point 4 */}
            <div className="d-flex mb-4">
              <div className="me-3  fs-3" style={{ color: "#ef8788" }} >
                <FaAward />
              </div>
              <div>
                <h5 className="mb-1">Trusted & Certified</h5>
                <p className="text-muted mb-0">
                  Recognized by clients and honored by the Government of Bangladesh (CIP status).
                </p>
              </div>
            </div>

          </div>

          {/* Right - Description */}
           <div className="col-lg-6 col-xl-5 my-3">

            <Image
              src="/manpower_services-removebg-preview.png"
              alt="Feature Image"
              width={600}
              height={600}
              className="rounded img-fluid"
            />

          </div>

        </div>
      </div>
    </section>

  </motion.div>
  
</motion.div>


         {/* <div className="max-w-4xl mx-auto px-6 mt-6 text-center">
             <h2 className="text-3xl md:text-4xl font-bold mb-10 ">
             Our Detailed Manpower Section Processing & Flow
                </h2>
        
             <div className='relative w-full aspect-[16/9]   flex justify-center'>
              <Image
              src="/detail_menpowerSectionFlow-copy1.png"
              alt="About Us"
              width={800}
          height={400}
              className='object-container rounded-xl '
              />
        
            </div>
        
       
        </div> */}
       
<motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
 <motion.div variants={item}>
  {/* why choose us  */}
          <section className="py-5 bg-success bg-opacity-10 mt-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Why Choose COCL</h2>
          <p className="text-muted">
            Complete manpower solutions with training, support & global service excellence
          </p>
        </div>

        {/* Cards */}
        <div className="row g-3">

          {/* Card 1 */}
          <div className="col-md-6 col-lg-4">
            <div className="d-flex p-3 shadow-sm rounded bg-white">
              <FaGraduationCap style={{ color: "#ef8788" }} className=" fs-3 me-3 " />
              <div>
                <h6>Dedicated Technical Training Center</h6>
                <p className="mb-0 text-muted">Professional skill development for workers.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 col-lg-4">
            <div className="d-flex p-3 shadow-sm rounded bg-white">
              <FaPlane className=" fs-3 me-3" style={{ color: "#ef8788" }}  />
              <div>
                <h6>Air Ticket & Travel Support (CTIL)</h6>
                <p className="mb-0 text-muted">Complete travel assistance for workers.</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-6 col-lg-4">
            <div className="d-flex p-3 shadow-sm rounded bg-white">
              <FaUserCheck className=" fs-3 me-3"  style={{ color: "#ef8788" }} />
              <div>
                <h6>Skilled & Certified Workforce</h6>
                <p className="mb-0 text-muted">Verified and job-ready professionals.</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-6 col-lg-4">
            <div className="d-flex p-3 shadow-sm rounded bg-white">
              <FaHospital className=" fs-3 me-3" style={{ color: "#ef8788" }}  />
              <div>
                <h6>In-House Medical Center</h6>
                <p className="mb-0 text-muted">Health check & medical support system.</p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-md-6 col-lg-4">
            <div className="d-flex p-3 shadow-sm rounded bg-white">
              <FaHeadset className="fs-3 me-3" style={{ color: "#ef8788" }} />
              <div>
                <h6>Strong Client Support & Backup</h6>
                <p className="mb-0 text-muted">24/7 assistance for clients & workers.</p>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-md-6 col-lg-4">
            <div className="d-flex p-3 shadow-sm rounded bg-white">
              <FaExchangeAlt className=" fs-3 me-3" style={{ color: "#ef8788" }}  />
              <div>
                <h6>Worker Replacement Guarantee</h6>
                <p className="mb-0 text-muted">Reliable replacement assurance system.</p>
              </div>
            </div>
          </div>

          {/* Card 7 */}
          <div className="col-md-6 col-lg-4">
            <div className="d-flex p-3 shadow-sm rounded bg-white">
              <FaBuilding className=" fs-3 me-3" style={{ color: "#ef8788" }}  />
              <div>
                <h6>In-House One-Stop Services</h6>
                <p className="mb-0 text-muted">All recruitment services under one roof.</p>
              </div>
            </div>
          </div>

          {/* Card 8 */}
          <div className="col-md-6 col-lg-4">
            <div className="d-flex p-3 shadow-sm rounded bg-white">
              <FaMobileAlt className=" fs-3 me-3" style={{ color: "#ef8788" }}  />
              <div>
                <h6>Direct Application via App</h6>
                <p className="mb-0 text-muted">Apply easily using Probashkormi App.</p>
              </div>
            </div>
          </div>

          {/* Card 9 */}
          <div className="col-md-6 col-lg-4">
            <div className="d-flex p-3 shadow-sm rounded bg-white">
              <FaMapMarkerAlt className=" fs-3 me-3"  style={{ color: "#ef8788" }} />
              <div>
                <h6>Real-Time Application Tracking</h6>
                <p className="mb-0 text-muted">Track your application instantly.</p>
              </div>
            </div>
          </div>

          {/* Card 10 */}
          <div className="col-md-6 col-lg-4">
            <div className="d-flex p-3 shadow-sm rounded bg-white">
              <FaShieldAlt className="fs-3 me-3"  style={{ color: "#ef8788" }} />
              <div>
                <h6>Safety & Compliance Guidance</h6>
                <p className="mb-0 text-muted">Ensuring legal and safe recruitment.</p>
              </div>
            </div>
          </div>

          {/* Card 11 */}
          <div className="col-md-6 col-lg-4">
            <div className="d-flex p-3 shadow-sm rounded bg-white">
              <FaPlaneDeparture className=" fs-3 me-3" style={{ color: "#ef8788" }}  />
              <div>
                <h6>Pre-Departure Briefing</h6>
                <p className="mb-0 text-muted">Training before overseas deployment.</p>
              </div>
            </div>
          </div>

          {/* Card 12 */}
          <div className="col-md-6 col-lg-4">
            <div className="d-flex p-3 shadow-sm rounded bg-white">
              <FaTools className=" fs-3 me-3"  style={{ color: "#ef8788" }} />
              <div>
                <h6>On-Site Problem Solution</h6>
                <p className="mb-0 text-muted">Quick resolution at job locations.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

        </motion.div>
</motion.div>

<motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
         <motion.div variants={item}>
       <CandidateProcessChart/>
        </motion.div>
        </motion.div>

<motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
          <motion.div variants={item}>
<TotalCountryWeWork/>
</motion.div>
</motion.div>
    </section>
  )
}




//   <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10">
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 place-items-center">

//     {/* Features */}
//     <div className="lg:col-span-3 lg:col-start-6 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
//       <span className='text-green-500'>✔</span> In-House One-Stop Services
//     </div>

//     <div className="lg:col-span-3 lg:col-start-4 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
//       <span className='text-green-500'>✔</span> Skilled & Certified Workforce
//     </div>

//     <div className="lg:col-span-4 lg:col-start-7 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
//       <span className='text-green-500'>✔</span> Technical Training (MTTC Approved)
//     </div>

//     <div className="lg:col-span-3 lg:col-start-3 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
//       <span className='text-green-500'>✔</span> Medical Testing (GCC Approved)
//     </div>

//     <div className="lg:col-span-4 lg:col-start-8 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
//       <span className='text-green-500'>✔</span> Air Ticket & Travel Support (CTIL)
//     </div>

//     <div className="lg:col-span-3 lg:col-start-2 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
//       <span className='text-green-500'>✔</span> Airport Coordination & Assistance
//     </div>

//     <div className="lg:col-span-4 lg:col-start-9 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
//       <span className='text-green-500'>✔</span> Pre-Departure Briefing
//     </div>

//     <div className="lg:col-span-3 lg:col-start-1 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
//       <span className='text-green-500'>✔</span> Safety & Compliance Guidance
//     </div>

//     {/* Circle in center */}
//     <div className="lg:col-span-2 lg:col-start-6 flex justify-center">
//       <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40
//         text-lg sm:text-xl lg:text-2xl 
//         text-white font-bold 
//         border-4 lg:border-8 border-double 
//         flex items-center justify-center text-center 
//         bg-[#ef8788] rounded-full box-border">
//         Why Choose Us!
//       </div>
//     </div>

//     <div className="lg:col-span-3 lg:col-start-10 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
//       <span className='text-green-500'>✔</span> Client Support & Backup Service
//     </div>

//     <div className="lg:col-span-3 lg:col-start-1 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
//       <span className='text-green-500'>✔</span> On-Site Problem Resolution
//     </div>

//     <div className="lg:col-span-3 lg:col-start-9 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
//       <span className='text-green-500'>✔</span> Management-Level Assistance
//     </div>

//     <div className="lg:col-span-4 lg:col-start-2 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
//       <span className='text-green-500'>✔</span> Worker Replacement Guarantee
//     </div>

//     <div className="lg:col-span-4 lg:col-start-8 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
//       <span className='text-green-500'>✔</span> Quality & Performance Assurance
//     </div>

//     <div className="lg:col-span-3 lg:col-start-3 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
//       <span className='text-green-500'>✔</span> Staff Management System
//     </div>

//     <div className="lg:col-span-3 lg:col-start-7 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
//       <span className='text-green-500'>✔</span> Digital Information Management
//     </div>
//     <div className="lg:col-span-4 lg:col-start-4 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
//       <span className='text-green-500'>✔</span> On line Application to by pass middle man
//     </div>

//     <div className="lg:col-span-3 lg:col-start-6 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
//       <span className='text-green-500'>✔</span> Employee
//     </div>

//     <div className="lg:col-span-3 lg:col-start-5 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
//       <span className='text-green-500'>✔</span> Digital Information Management
//     </div>

//   </div>
// </div>