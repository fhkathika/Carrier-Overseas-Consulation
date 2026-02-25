import Image from 'next/image'
import React from 'react'

export default function about() {
  return (
    <section className='py-16 bg-gray-100'>
<div className='max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10'>
    {/* Left image  */}
    <div className='relative w-full h-[400px]'>
      <Image
      src="/about.jpg"
      alt="About Us"
      fill
      className='object-cover rounded-xl shadow-lg'
      />

    </div>
    {/* Right content  */}
    <div>
      <p className='text-[#e82e31] font-semibold mb-3'>
        ABOUT US
      </p>
      <h2 className='text-3xl md:text-4xl font-bold mb-6 leading-tight'>
         We Help You Build Your Career Overseas With Confidence
      </h2>
    <p className='text-gray-600 mb-6'>
            Career Overseas Consultants Ltd. is committed to guiding
            professionals and students toward global opportunities.
            We provide trusted consultation, visa processing assistance,
            and career planning to ensure your success abroad.
    </p>
    {/* Features  */}
    <ul className='space-y-3 mb-8'>
      <li className='flex items-center gap-3'><span className='text-[#e82e31]'>✔</span>
       Professional Career Guidance
      </li>
      <li className='flex items-center gap-3'><span className='text-[#e82e31]'>✔</span>
       Transparent Visa Processing
      </li>
      <li className='flex items-center gap-3'><span className='text-[#e82e31]'>✔</span>
         Trusted Global Partnerships
      </li>
    </ul>
    </div>
    </div>
    </section>
  )
}
