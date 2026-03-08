"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [isOpen,setIsOpen]=useState(false)
  const [loggedIn,setLoggedIn]=useState(false)
  const router=useRouter()
  const pathname=usePathname()
  const navLinks=[
{name:"Home",path:"/"},
{name:"About",path:"/#about"},
{name:"Job Portal",path:"/#jobPortal"},
// {name:"Conatct",path:"/contact"},
  ]
   useEffect(()=>{
    const checkaAuth=async()=>{
const res= await fetch("/api/admin/me")
const data=await res.json()
setLoggedIn(data.loggedIn)

    }
    checkaAuth()
  },[])
const handleLogout=async()=>{
  await fetch("/api/admin/logout",{method:"POST"})
  setLoggedIn(false)
  router.push("/admin/login")
  router.refresh()
}
  return (
  <>
  
  
<nav className="relative bg-[#111827] shadow-md">
  <div className="max-w-7xl mx-auto px-4 py-4 flex justify-end items-center">

    {/* Logo */}
    <Link href="/" className=" absolute left-6 -bottom-6 z-50">
      <Image
        src="/COC (2).png"
        alt="Company Logo"
        width={220}
        height={50}
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
      {
        loggedIn && (
             <>
          <Link  href="/admin/create-job"
className={`block ${pathname==="/admin/create-job"?"text-red-500 font-semibold"
  :"hover:text-red-500 font-semibold"}`}
onClick={()=>setIsOpen(false)} //close menu after click
>
  Create Job
</Link>
          <Link  href="/admin/jobPortal"
className={`block ${pathname==="/admin/job-portal"?"text-red-500 font-semibold"
  :"hover:text-red-500 font-semibold"}`}
onClick={()=>setIsOpen(false)} //close menu after click
>
  Update Circular
</Link>
            <button
          onClick={handleLogout}
          className="bg-[#e82e31] text-white px-2 py-1 rounded"
        >
          Logout
        </button>
        </> 
        )
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
        {
        loggedIn && (
          <>
          <Link  href="/admin/create-job"
className={`block ${pathname==="/admin/create-job"?"text-red-500 font-semibold"
  :"hover:text-red-500 font-semibold"}`}
onClick={()=>setIsOpen(false)} //close menu after click
>
  Create Job
</Link>
          <Link  href="/admin/job-portal"
className={`block ${pathname==="/admin/job-portal"?"text-red-500 font-semibold"
  :"hover:text-red-500 font-semibold"}`}
onClick={()=>setIsOpen(false)} //close menu after click
>
  Update Circular
</Link>
            <button
          onClick={handleLogout}
          className="bg-[#e82e31] text-white px-2 py-1 rounded"
        >
          Logout
        </button>
        </> 
        )
      }

      </div>
    )
  }
</>
  )
}
