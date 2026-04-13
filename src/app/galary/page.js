"use client"
import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import "yet-another-react-lightbox/styles.css"
import Zoom from 'yet-another-react-lightbox/plugins/zoom'

const galaryImg = [];

for (let i = 1; i <= 21; i++) {
  galaryImg.push({
    id: i,
    src: `/galary_img_cocl/IMG_${i}.JPG
    `
  });
}

export default function galary() {
  const [index,setIndex]=useState(0)
  const [open,setOpen]=useState(false)
  return (
 <section className=" mt-5">
  <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-8'>
    <h3 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center'>
 A Glance at Client Journeys
    </h3>
  </div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto py-5">
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
