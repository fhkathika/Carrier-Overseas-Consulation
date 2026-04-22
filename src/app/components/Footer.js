"use client"
"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-300 border-top footer">
      <div className="footer-top py-5">
        <div className="container">
          <div className="row">

            {/* Logo + About */}
            <div className="col-lg-3 my-4 d-flex  align-items-center">
              <div className="pb-4">
                <img
                  src="/COCL logo - V2.png"
                  alt="Logo"
                  style={{ maxWidth: "150px" }}
                />
              </div>

            

          
            </div>

            {/* Customer */}
            {/* <div className="col-sm-6 col-lg-2 my-4 ms-auto">
              <h5 className="text-white mb-3">Customer</h5>
              <ul className="list-unstyled footer-links ">
                <li><Link href="#" className="text-gray-700">Apps Store</Link></li>
                <li><Link href="#">Google Store</Link></li>
                <li><Link href="#">Latest News</Link></li>
                <li><Link href="#">Our Blog</Link></li>
                <li><Link href="#">Help Center</Link></li>
              </ul>
            </div> */}

            {/* Product */}
            <div className="col-sm-6 col-lg-3 my-4">
              <h5 className="text-black mb-3">Links</h5>
              <ul className="list-unstyled footer-links">
                <li><Link href="/" className="text-gray-700">Home</Link></li>
                <li><Link href="/about" className="text-gray-700">About Us</Link></li>
                <li><Link href="/success" className="text-gray-700">Our Success</Link></li>
                <li><Link href="/galary" className="text-gray-700">Gallary</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="col-sm-6 col-lg-3 my-4">
              <h5 className="text-black mb-3">Conatct</h5>
              <p className='text-sm'>House 25, Road 34, Gulshan 2,
 Dhaka 1212, Bangladesh</p>
 <p className='text-sm'>info@ahmedamin.com</p>
 <p className='text-sm'>+88 02 8812395</p>
            </div>
            <div className="col-sm-6 col-lg-3 my-4 border-2 d-flex justify-content-center align-items-center">

  <div className="d-flex justify-content-center align-items-center">

    <a  href="https://www.facebook.com/profile.php?id=61585925261061" className="icon rounded-circle me-2 text-white d-flex align-items-center justify-content-center"
       style={{ background: "#2e44e8", width: "35px", height: "35px" }}>
      <FaFacebookF />
    </a>

    <a className="icon rounded-circle me-2 text-white d-flex align-items-center justify-content-center"
       style={{ background: "#2e44e8", width: "35px", height: "35px" }}>
      <FaTwitter />
    </a>

    <a className="icon rounded-circle me-2 text-white d-flex align-items-center justify-content-center"
       style={{ background: "#2e44e8", width: "35px", height: "35px" }}>
      <FaInstagram />
    </a>

    <a className="icon rounded-circle me-2 text-white d-flex align-items-center justify-content-center"
       style={{ background: "#2e44e8", width: "35px", height: "35px" }}>
      <FaLinkedinIn />
    </a>

  </div>

</div>

          </div>
        </div>
        <div className='border-t border-gray-700 mt-10 pt-6 text-center text-sm'>
   <p>© {new Date().getFullYear()} COCL All rights reserved.</p>
 </div>
      </div>
    </footer>
  );
}

