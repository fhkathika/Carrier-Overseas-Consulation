import React from 'react'
const client_logos=[
    {
    id:1,
    src:'/clientLogoImg/img1.PNG'
},
    {
    id:2,
    src:'/clientLogoImg/img2.PNG'
},
    {
    id:3,
     src:'/clientLogoImg/img3.PNG'
},
    {
    id:4,
     src:'/clientLogoImg/img4.PNG'
},
    {
    id:5,
     src:'/clientLogoImg/img5.PNG'
},
    {
    id:6,
     src:'/clientLogoImg/img6.PNG'
},
    {
    id:7,
     src:'/clientLogoImg/img7.PNG'
},
    {
    id:8,
     src:'/clientLogoImg/img8.PNG'
},
    {
    id:9,
     src:'/clientLogoImg/img9.PNG'
},

]
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

            {client_logos.map((item, index) => (
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
