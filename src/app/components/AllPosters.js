"use client"

import React, { useEffect, useState } from 'react'
import DeleteModal from './DeleteModal'
export default function   AllPosters() {

    
      const [poster, setPoster] = useState([]);
 useEffect(() => {
  async function getPoster() {
    try {
      const res = await fetch("/api/admin/create-jobPoster")
      const data = await res.json()
      setPoster(data)
    } catch (error) {
      console.log(error)
    }
  }
  getPoster()
}, []) // ✅ Add empty array to avoid infinite loop
   
  console.log("posters..",poster)
  return (
    <>
    
         {/* Title */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-5 mt-12">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-red-600">
          All Job Posters
        </h3>
      </div>

      {/* Grid */}
     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto py-10">
{poster?.map((item, i) => (
     <div key={i} className="group relative overflow-hidden rounded-br-lg shadow-lg bg-white p-6 transition duration-500 ">

        {/* Overlay */}
      <div className="absolute  translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

  <React.Fragment key={i}>
    <div>
      <img className="h-auto max-w-full rounded-base" src={item?.image} alt="" />
    </div>
    <div className="mt-4 ml-2">
      <DeleteModal item={item} path="/api/admin/create-jobPoster" />
    </div>
  </React.Fragment>
  </div>
))}
   </div>
    </>
  )
}
