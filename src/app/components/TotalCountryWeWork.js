import Image from 'next/image'
import React from 'react'

export default function TotalCountryWeWork() {
  return (
   <div className="max-w-6xl mx-auto px-6 mt-6 text-center">
             <h2 className="max-w-6xl md:max-w-3xl text-1xl md:text-4xl font-bold bg-[#c1dff2] mx-auto  p-2  rounded-[50px_10px_50px_10px] mb-10 ">
              Countries We Work
                  </h2>
          
               <div className='flex justify-center'>
                <Image
                src="/asia_M.png"
                alt="About Us"
                width={800}
            height={600}
                className="w-full h-full object-cover shadow-xl rounded-full "
                />
          
              </div>
          
         
          </div>
  )
}
