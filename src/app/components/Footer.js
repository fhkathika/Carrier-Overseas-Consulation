"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export default function Footer() {
  return (
   <footer className='bg-[#0f172a] text-white pt-14 pb-8'>
    <div className='max-w-7xl mx-auto px-6'>
        {/* grid section  */}
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>

  {/* column 1  */}
  <div>
{/* <h2 className='text-2xl font-bold text-white mb-4'>COCL</h2> */}
 <Link href="/" className="flex items-center">
  <Image
  src="/COC (2).png"
  alt="Company Logo"
  width={240}
  height={40}
/>
    </Link>
{/* <p className='text-sm leading-relaxed'> Short description about the company. 
          What your business does and your mission.</p> */}
  </div>
  {/* column 2 */}
  <div className='text-lg font-semibold text-white mb-4'>
{/* <h3>Links </h3> */}
<ul className='space-y-2'>
  <li><a href="/" className="hover:text-[color:#e82e31] transition">Home</a></li>
  <li><a href="/#about" className="hover:text-[color:#e82e31] transition">About</a></li>
  <li><a href="/#jobPortal" className="hover:text-[color:#e82e31] transition">Jobs</a></li>
  {/* <li><a href="/contact" className="hover:text-[color:#e82e31] transition">Conatct</a></li> */}
</ul>
  </div>
  {/* column 3 */}
  <div>
<h3 className='text-lg font-semibold text-white mb-2'>Key Services & Capabilities</h3>
<ul>
          <li><a  className="">•  International manpower sourcing</a></li>
          <li><a  className="">•  Visa & documentation processing</a></li>
          <li><a  className="">•  Recruitment consulting</a></li>
          <li><a  className="">•  Skills testing & evaluation</a></li>
          <li><a  className="">•  Worker deployment</a></li>

</ul>
  </div>
  {/* column 4 */}
  <div>
<h3 className='text-lg font-semibold text-white mb-4'>Conatct</h3>
<p className='text-sm'>House 25, Road 34, Gulshan 2,
Dhaka 1212, Bangladesh</p>
<p className='text-sm'>info@ahmedamin.com</p>
<p className='text-sm'>+88 02 8812395</p>
</div>
</div>
{/* footer bottom  */}
<div className='border-t border-gray-700 mt-10 pt-6 text-center text-sm'>
  <p>© {new Date().getFullYear()} COCL All rights reserved.</p>
</div>
 </div>
   </footer>
  )
}
