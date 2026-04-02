"use client"
import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function CountManPowerStatics() {
    const {ref,inView}=useInView({
triggerOnce:true,
threshold:0.3,
    })
  return (
      <div className="max-w-6xl mx-auto px-6 mt-6 text-center">
  <h2 className="text-1xl md:text-4xl font-bold sm:mb-15">
    Category Wise Total Manpower Mobilized Through COCL(2000-2024)
  </h2>

      <div  ref={ref} className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
<div className=' flex justify-around p-10 bg-red-100'>
   <div className=' flex items-center justify-center p-2 '>
    <img className='w-15 h-15' src='/workers (1).png'/>
   </div>
   <div className='text-center text-[#e82e31]'>
                 <p className='text-xl sm:text-2xl  font-bold  border-[#e82e31] mb-3'>Labour</p>
      <p className='text-xl sm:text-2xl  font-semibold'>
        {
            inView && (
<>
<CountUp end={74} duration={2}/>% | {" "}
<CountUp end={97949} duration={2} separator=","/>
</>

            )
        }
          </p>
      </div>
</div>
<div className=' flex justify-around p-10 p-10 bg-blue-100'>
   <div className=' flex items-center justify-center p-2 '>
    <img className='w-15 h-15 ' src="/labor.png"/>
   </div>
   <div className='text-center text-[#2043aa]'>
                 <p className='text-xl sm:text-2xl  font-bold  border-[#2043aa] mb-3'>Skilled</p>
      <p className='text-xl sm:text-2xl font-semibold'>
        {
            inView && (
<>
<CountUp end={21} duration={2}/>% | {" "}
<CountUp end={28505} duration={2} separator=","/>
</>

            )
        }
          </p>
      </div>
</div>
<div className=' flex justify-around p-10 p-10 bg-green-100'>
   <div className=' flex items-center justify-center text-center p-2 '>
    <img className='w-15 h-15' src='/work-team.png'/>
   </div>
   <div className=' flex flex-col justify-center text-[#3abc43]   item-center '>
                 <p className='text-xl sm:text-2xl  font-bold  border-[#3abc43] mb-3'>Professional</p>
      <p className='text-xl sm:text-2xl  font-semibold'>
        {
            inView && (
<>
<CountUp end={5} duration={2}/>% | {" "}
<CountUp end={6851} duration={2} separator=","/>
</>

            )
        }
          </p>
      </div>
</div>


       </div>

</div>
 
  )
}
