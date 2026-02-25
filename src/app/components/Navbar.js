"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Navbar() {
  const [isOpen,setIsOpen]=useState(false)
  const pathname=usePathname()
  const navLinks=[
{name:"Home",path:"/"},
{name:"About",path:"/#about"},
{name:"Job Portal",path:"/#jobPortal"},
// {name:"Conatct",path:"/contact"},
  ]
  console.log("navLinks",navLinks[0].name)
  return (
  <>
  
  
<nav className="relative bg-[#111827] shadow-md">
  <div className="max-w-7xl mx-auto px-6 py-6 flex justify-end items-center">

    {/* Logo */}
    <Link href="/" className=" absolute left-6 -bottom-6 z-50">
      <Image
        src="/coc_logo.png"
        alt="Company Logo"
        width={140}
        height={60}
        className="drop-shadow-lg"
      />
    </Link>
    {/* <h1 className="text-2xl font-bold">COCL</h1> */}
 {/* Desktop Menu  */}
    <div className="hidden md:flex space-x-6 text-white ">
      {
        navLinks?.map((link)=>(
<Link 
key={link.path}
href={link.path}
className={`transition-colors duration-300 ${
  pathname===link.path?"text-[#e82e31] font-semibold"
  :"hover:text-[#e82e31] font-semibold"
}`}
>
  {link?.name}
</Link>
        ))
      }
      
    </div>
    {/* Mobile Button  */}
    <button
    className="md:hidden text-white"
    onClick={()=>setIsOpen(!isOpen)}
    >
   ☰
    </button>
  </div>


</nav>
  {
    isOpen && (
      <div className="md:hidden px-6 pb-4 space-y-3 text-black bg-white mt-10">
        {
          navLinks.map((link)=>( 
<Link key={link.path} href={link.path}
className={`block ${pathname===link.path?"text-red-500 font-semibold"
  :"hover:text-red-500 font-semibold"}`}
onClick={()=>setIsOpen(false)} //close menu after click
>
  {link?.name} 
</Link>
          ))
        }
      

      </div>
    )
  }
</>
  )
}
