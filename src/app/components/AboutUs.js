"use client"
import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
  return (
    <section className='py-16 bg-gray-100'>
<div className='max-w-7xl mx-auto  px-6 grid grid-cols-1 lg:grid-cols-2 gap-10'>
    {/* Left image  */}
    <div className='relative w-full h-[400px] '>
      <Image
      src="/aboutUs.jpg"
      alt="About Us"
      fill
      className='object-cover rounded-xl shadow-lg'
      />

    </div>
    {/* Right content  */}
    <div>
      {/* <p className='text-[#e82e31] font-semibold mb-3'>
        ABOUT US
      </p> */}
      <h2 className='text-3xl md:text-4xl font-bold mb-6 leading-tight'>
       A Legacy of Ethical Excellence
      </h2>
    <p className='text-gray-600 mb-6'>
           The COCL Story Established in 1998, Career Overseas Consultants Ltd.
            (COCL) is a premier subsidiary of the Ahmed Amin Group, founded by the Late Mr. Azharuddin Ahmed.
             We were established with the singular purpose of providing ethical, professional recruitment and placement services to meet the global demand for skilled personnel.
              Today, COCL is an ISO 9001:2015 certified company, recognized for maintaining the highest quality management standards in overseas placement.
    </p>
    {/* Features  */}
    <ul className='space-y-3 mb-8 text-gray-600'>
      <li className='flex items-center gap-3'><span className='text-[#e82e31]'>✔</span>
      <p> <strong>Honesty & Trust:</strong> We are transparent with our clients and candidates, a reputation proven over decades of service.</p>
      </li>
      <li className='flex items-center gap-3'><span className='text-[#e82e31]'>✔</span>
      	<p> <strong>Zero-Misfit Policy:</strong> Our goal is to serve clients by providing only the most suitable candidates, ensuring no "misfits" are sent to valued employers.</p>
      </li>
      <li className='flex items-center gap-3'><span className='text-[#e82e31]'>✔</span>
        <p>
    <strong>Technical Empowerment:</strong> Through our Multicraft Technical Training Center (MTTC), we ensure every candidate is trained and job-ready before mobilization.
  </p>
      </li>
      
    </ul>
    <p className='text-gray-600 mb-6'>Infrastructure and Expertise Operating from a 5,780 sq. ft. modern facility in Dhaka, 
        we offer One-Stop Services, including interviewing, trade testing, medical arrangements, and air ticketing. 
        Our operations are powered by a dedicated team of 93 professionals and an associate panel of industry experts.</p>
    </div>
    </div>
    </section>
  )
}
