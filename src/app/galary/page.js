"use client"
import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import "yet-another-react-lightbox/styles.css"
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
const galaryImg=[
  {
    id:1,
    src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
  },
  {
    id:2,
    src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
  },
  {
    id:3,
    src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
  },
  {
    id:4,
    src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
  },
  {
    id:5,
    src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
  },
  {
    id:6,
    src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
  },
  {
    id:7,
    src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
  },
  {
    id:8,
    src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
  },
  {
    id:9,
    src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
  },
  {
    id:10,
    src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
  },
  {
    id:11,
    src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
  },
  {
    id:12,
    src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
  },
 
]
export default function galary() {
  const [index,setIndex]=useState(0)
  const [open,setOpen]=useState(false)
  return (
 <section className="py-16 bg-gray-50">
  <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-8'>
    <h3 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center'>
 A Glance at Client Journeys
    </h3>
  </div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto py-10">
  {
    galaryImg?.map((item,i)=>(
 <div key={item?.id}>
        <img className="h-auto max-w-full rounded-base" src={item?.src} alt=""
        onClick={()=>{setIndex(i);setOpen(true)}}
        />
    </div>
    ))
  }
   
 
   
   
    
</div>

 {
    open &&(
<Lightbox
slides={galaryImg?.map(item=>({src:item?.src}))}
open={open}
index={index}
close={()=>setOpen(false)}
plugins={[Zoom]}
/>

    )
  }
  </section>

  )
}
