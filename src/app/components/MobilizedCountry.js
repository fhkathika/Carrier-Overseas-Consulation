import React from 'react'
"use client"
import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'


const data=[
      {
        country:"Saudi Arabia",
        src:"/saudi.png",
        percent:"52",
        labour:"52731",
        Skilled:"14221",
        Professionals:"2501"
    },
    {
        country:"Malaysia",
        src:"/malaysia.png",
        percent:"14",
        labour:"12919",
        Skilled:"4828",
        Professionals:"1222"
    },
     {
        country:"UAE & Dubai",
        src:"/united-arab-emirates.png",
        percent:"10",
        labour:"9598",
        Skilled:"2905",
        Professionals:"812"
    },
     {
        country:"Qatar",
        src:"/qatar.png",
        percent:"9",
        labour:"9152",
        Skilled:"2500",
        Professionals:"705"
    },
    {
        country:"Iraq",
        src:"/iraq.png",
        percent:"7",
        labour:"6822",
        Skilled:"2056",
        Professionals:"826"
    },
   
    {
        country:"Singapore",
        src:"/singapore.png",
        percent:"7",
        labour:"2109",
        Skilled:"832",
        Professionals:"521"
    },
   
  
]

export default function MobilizedCountry() {
       const {ref,inView}=useInView({
triggerOnce:true,
threshold:0.3,
    })
  return (
     <div className="max-w-6xl mx-auto px-6 mt-6 text-center mb-6">
                 <h2 className="text-3xl md:text-4xl font-bold mb-10 ">
                Total Manpower Mobilized Globally(2000-2024)
                    </h2>
            
             <div  ref={ref} className='relative w-full bg-cover bg-center' style={{backgroundImage:"url(/asiaMap.png)"}}>
              <div className='absolute inset-0 bg-black/10 backdrop-blur-sm'></div>
              <div className='relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
               {
data.map((info)=>(
<div className=' flex justify-around p-8 '>
   <div className=' flex flex-col items-center justify-center p-2  border-r-2 border-red-100'>
    <img className='w-15 h-15' src={info?.src}/>
    <p>{info?.country}</p>
   </div>
   <div className='text-center text-[#e82e31] '>
   
                 <p className='text-xl sm:text-2xl  font-bold mb-3'>
                     {
            inView && (
<>
<CountUp end={info?.percent} duration={2}/>% 
</>
 )
        }
                 </p>
                 <div className='flex justify-between'>
                    <p className='font-bold'>Labour</p>
                    <p className='font-bold'>
                                     {
            inView && (
<>
<CountUp end={info?.labour} duration={2} separator=","/>
</>
 )
        }
                    </p>
                 </div>
                 <div className='flex justify-between'>
                    <p className='font-bold'>Skilled</p>
                    <p className='font-bold'>
                          {
            inView && (
<>
<CountUp end={info?.Skilled} duration={2} separator=","/>
</>
 )
        }

                    </p>
                 </div>
                 <div className='flex justify-between'>
                    <p className='mr-3 font-bold'>Professional </p>
                    <p className='font-bold'> 
          {
            inView && (
<>
<CountUp end={info?.Professionals} duration={2} separator=","/>
</>
 )
        }

                    </p>
                 </div>
                
   
      </div>
</div>

))
               }

</div>


       </div>
            
           
            </div>
  )
}


