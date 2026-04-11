"use client"
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import '../style.css'

export default function Navbar() {
  const [isOpen,setIsOpen]=useState(false)
  const [loggedIn,setLoggedIn]=useState(false)
  const router=useRouter()
  const pathname=usePathname()
  const [active, setActive] = useState("Home")
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
<nav className="navbar navbar-expand-lg sticky-top bg-white shadow-sm">
      <div className="container">

        {/* Logo */}
   

<Link href="/" className="navbar-brand flex items-center">
  <Image
    src="/COCL logo - V2.png"
    alt="Logo"
    width={80}
    height={50}
    className="h-12 w-auto object-contain"
    priority
  />
</Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas */}
        <div
          className="offcanvas offcanvas-start"
          id="offcanvasNavbar"
        >
          <div className="offcanvas-header">
            <h5>Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>

          <div className="offcanvas-body">

            {/* Nav Items */}
            <ul className="navbar-nav m-auto">

              <li className="nav-item  font-bold">
                <Link className="nav-link" href="/">Home</Link>
              
              </li>
              <li className="nav-item  font-bold ">
                <Link className="nav-link" href="/about">About Us</Link>
              
              </li>
              <li className="nav-item  font-bold">
                <Link className="nav-link" href="/success">Our Success</Link>
              
              </li>
              <li className="nav-item  font-bold">
                <Link className="nav-link" href="/achievement">Achievement</Link>
              
              </li>
              <li className="nav-item  font-bold">
                <Link className="nav-link" href="/Circular">Job Circular</Link>
              
              </li>
              <li className="nav-item  font-bold">
                <Link className="nav-link" href="/galary">Gallary</Link>
              
              </li>

            
            </ul>

        
          </div>
        </div>
      </div>
    </nav>
  )
}







// <nav className=" bg-[#111827] shadow-md">
//   <div className="max-w-7xl mx-auto  flex justify-between items-center">

//     {/* Logo */}
//     <Link href="/" className="  ">
//       <Image
//         src="/COC (5).png"
//         alt="Company Logo"
//         width={240}
//         height={70}
//         className=" w-36 h-10 sm:w-40 sm:h-12 md:w-60 "
//       />
//     </Link>
//     {/* <h1 className="text-2xl font-bold">COCL</h1> */}
//  {/* Desktop Menu  */}
//     <div className="hidden md:flex space-x-6 text-white px-2">
//       {
//         navLinks?.map((link)=>(
// <Link 
// key={link.path}
// href={link.path}
// className={`transition-colors duration-300 ${
//   pathname===link.path?"text-[#e82e31] font-semibold"
//   :"hover:text-[#e82e31] font-semibold"
// }`}
// >
//   {link?.name}
// </Link>
//         ))
//       }
//       {
//         loggedIn && (
//              <>
//           <Link  href="/admin/create-job"
// className={`block ${pathname==="/admin/create-job"?"text-red-500 font-semibold"
//   :"hover:text-red-500 font-semibold"}`}
// onClick={()=>setIsOpen(false)} //close menu after click
// >
//   Create Job
// </Link>
//           <Link  href="/admin/jobPortal"
// className={`block ${pathname==="/admin/jobPortal"?"text-red-500 font-semibold"
//   :"hover:text-red-500 font-semibold"}`}
// onClick={()=>setIsOpen(false)} //close menu after click
// >
//   Update Circular
// </Link>
//             <button
//           onClick={handleLogout}
//           className="bg-[#e82e31] text-white px-2 py-1 rounded"
//         >
//           Logout
//         </button>
//         </> 
//         )
//       }
      
//     </div>
//     {/* Mobile Button  */}
//     <button
//     className="md:hidden text-white px-3"
//     onClick={()=>setIsOpen(!isOpen)}
//     >
//    ☰
//     </button>
//   </div>


// </nav>
//   {
//     isOpen && (
//       <div className="md:hidden px-6 pb-4 space-y-3 text-black bg-white mt-10">
//         {
//           navLinks.map((link)=>( 
// <Link key={link.path} href={link.path}
// className={`block ${pathname===link.path?"text-red-500 font-semibold"
//   :"hover:text-red-500 font-semibold"}`}
// onClick={()=>setIsOpen(false)} //close menu after click
// >
//   {link?.name} 
// </Link>
//           ))
//         }
//         {
//         loggedIn && (
//           <>
//           <Link  href="/admin/create-job"
// className={`block ${pathname==="/admin/create-job"?"text-red-500 font-semibold"
//   :"hover:text-red-500 font-semibold"}`}
// onClick={()=>setIsOpen(false)} //close menu after click
// >
//   Create Job
// </Link>
//           <Link  href="/admin/jobPortal"
// className={`block ${pathname==="/admin/jobPortal"?"text-red-500 font-semibold"
//   :"hover:text-red-500 font-semibold"}`}
// onClick={()=>setIsOpen(false)} //close menu after click
// >
//   Update Circular
// </Link>
//             <button
//           onClick={handleLogout}
//           className="bg-[#e82e31] text-white px-2 py-1 rounded"
//         >
//           Logout
//         </button>
//         </> 
//         )
//       }

//       </div>
//     )
//   }