import client_logos from '@/data/client_logos'
import React from 'react'

export default function Client_Logo() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className=' mx-auto  mb-12'>
    <h3 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center'>
     Our Clients
    </h3>
    <p className="text-center text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl bg-[#111827] py-2 mt-2 ">
    We owe our steady and solid growth to the following esteemed companies</p>
  </div>
          <div className="flex animate-scroll gap-0 w-max">

            {[...client_logos, ...client_logos].map((item, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-white-100  transition"
              >
                <img src={item?.src}  />
              </div>
            ))}

          </div>
        </div>
  )
}
