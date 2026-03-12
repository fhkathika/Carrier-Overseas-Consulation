"use client"
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { useRouter } from 'next/navigation'

export default function AllJobs({jobs}) {
  
const [expandedIndex, setExpandedIndex] = useState(null)
const route=useRouter()
const handleClick=(id)=>{
  route.push(`/jobDetail/${id}`)
}
  return (
  <section className='py-16  bg-gray-50'>
  <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12'>
    <h3 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center'>
      Explore our latest job opportunities and grow your career.
    </h3>
  </div>

        {/* Slider */}
<div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 '> 
   
            {
                jobs.map((jobs,index)=>(
                 
                  
      <div key={index} className="group relative overflow-hidden rounded-br-lg shadow-lg bg-white p-6 transition duration-500 hover:-translate-y-2 hover:shadow-xl ">

        {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#AF3436] to-[#e82e31] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

        {/* Content */}
        <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
          <h3 className="text-xl font-semibold mb-2">{jobs?.category}</h3>
          <p className="mb-2 opacity-70 group-hover:opacity-100 "> Vacancy : <strong>{jobs?.vacancies}</strong> </p>
          {/* <p className="mb-4 opacity-70 group-hover:opacity-100">{jobs?.salary}</p> */}
          <hr className='mb-4 text-gray-300'/>
          {/* <p className="mb-4 text-gray-400">{jobs.describtion}</p> */}
          {/* <p
  className={`mb-2 text-sm transition-all duration-300 opacity-70 group-hover:opacity-100 ${
    expandedIndex === 3 ? "" : "line-clamp-3"
  }`}
>
  {jobs?.describtion}
</p> */}
<div className="job-description line-clamp-3">
            <div dangerouslySetInnerHTML={{ __html: jobs?.describtion }} />
          </div>

{/* <button
className=" group-hover:text-white group-hover:text-[#772828] transition duration-300  block text-sm  "
        
  onClick={() =>
    setExpandedIndex(expandedIndex === 3 ? null : 3)
  }
 
>
  {expandedIndex === 3 ? "See Less" : "See More"}
</button> */}
<div className='flex flex-end'>
  <button onClick={()=>handleClick(jobs?._id)} className=" ml-auto px-2 py-2 rounded border border-[#772828]rounded-lg group-hover:bg-white group-hover:text-[#772828] transition duration-300">
            View Detail
          </button>
</div>
        
        </div>

      </div>
     
  
                ))
            }


</div>
    </section>
  )
}
