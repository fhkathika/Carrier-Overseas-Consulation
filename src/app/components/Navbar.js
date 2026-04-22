"use client"
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import '../style.css'
import { FaClock, FaHeadset, FaUser, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

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

    <>
<div className="header-top header-border-bottom small py-2 d-none d-lg-block">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">

          {/* LEFT */}
          <div className="d-flex align-items-center d-none d-lg-block">
            <ul className="nav">

              <li className="nav-item me-3">
                <span className="d-flex align-items-center">
                  <FaClock className="me-2" />
                  Visit time: Mon-Sat 9:00am-5:30pm
                </span>
              </li>

              <li className="nav-item">
                <a href="#" className="navbar-link text-reset d-flex align-items-center">
                  <FaHeadset className="me-2" />
                  Call us now: +88 02 8812395
                </a>
              </li>

            </ul>
          </div>

          {/* RIGHT */}
          <div className="d-flex align-items-center w-100 w-lg-auto justify-content-center justify-content-lg-end">

            {/* LANGUAGE DROPDOWN */}
            {/* <div className="dropdown ms-0 ms-lg-3">
              <button
                className="btn dropdown-toggle text-reset d-flex align-items-center"
                type="button"
                data-bs-toggle="dropdown"
              >
                <img
                  src="/flags/uk.svg"
                  alt="English"
                  style={{ width: "20px" }}
                  className="me-2"
                />
                English
              </button>

              <ul className="dropdown-menu mt-2 shadow">
                <li className="dropdown-item-text">Select language</li>
                <li><hr className="dropdown-divider" /></li>

                <li>
                  <a className="dropdown-item" href="#">
                    <img src="/flags/sp.svg" alt="" width="20" className="me-2" />
                    Español
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    <img src="/flags/fr.svg" alt="" width="20" className="me-2" />
                    Français
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    <img src="/flags/gr.svg" alt="" width="20" className="me-2" />
                    Deutsch
                  </a>
                </li>
              </ul>
            </div> */}

            {/* TOP LINKS */}
            {/* <ul className="nav ms-auto ms-lg-3">
              <li className="nav-item">
                <a href="#" className="nav-link text-reset">Contact</a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link text-reset">
                  <FaUser className="me-1" />
                  Login
                </a>
              </li>
            </ul> */}

            {/* SOCIAL ICONS */}
            <div className="d-none d-lg-flex gap-3 ms-3">
              <a href="https://www.facebook.com/profile.php?id=61585925261061" className="text-dark">
                <FaFacebookF />
              </a>
              <a href="#" className="text-dark">
                <FaTwitter />
              </a>
              <a href="#" className="text-dark">
                <FaLinkedinIn />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>

 
<nav className="navbar navbar-expand-lg sticky-top bg-white shadow-sm p-2">
      <div className="container">

        {/* Logo */}
   

<Link href="/" className="navbar-brand flex items-center">
  <div className="relative w-[120px] h-[60px] md:w-[160px] md:h-[50px]">
    <Image
      src="/COCL logo - V2.png"
      alt="Logo"
      fill
      className="object-contain"
      priority
    />
  </div>
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
              {/* <li className="nav-item  font-bold">
                <Link className="nav-link" href="/achievement">Achievement</Link>
              
              </li> */}
              {/* <li className="nav-item  font-bold">
                <Link className="nav-link" href="/Circular">Job Circular</Link>
              
              </li> */}
              <li className="nav-item  font-bold">
                <Link className="nav-link" href="/galary">Gallary</Link>
              
              </li>

            
            </ul>

          {/* Right Side */}
            <div className="d-none d-lg-flex align-items-center">

           
              <Link href="/contactUs" className="btn btn-danger">
                Contact Us
              </Link>

            </div>
          </div>
        </div>
      </div>
    </nav>
     </>  
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