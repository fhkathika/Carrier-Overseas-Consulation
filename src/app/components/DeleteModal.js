"use client"
import React, { useState } from 'react'
import { createPortal } from "react-dom"
export default function DeleteModal({job}) {
      const [open, setOpen] = useState(false);
      const haddleDelete=async(id)=>{
        console.log("id..",id)
const res=await fetch(`/api/jobs/${id}`,{
    method:"DELETE",
});
if(res.ok){
    alert("Job Deleted Successfully ✅")
location.reload(); //quick refresh
}

      }
  return (
    <>
      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className=" ml-auto px-2 py-2 rounded  border-[#772828]rounded-lg group-hover:bg-white group-hover:text-[#772828] transition duration-300"
      >
        🗑
      </button>

      {/* Modal */}
     {open && createPortal(
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"  onClick={()=>setOpen(false)}>
    <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">

      {/* Close Button */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-3 right-3 text-xl"
      >
        ✖
      </button>

      <h2 className="text-lg font-semibold mb-4">
        Delete Job
      </h2>

      <p className="text-gray-600">
       Are you want to delete?
      </p>

      <div className="mt-4 flex gap-3">
      

        <button
          onClick={() => haddleDelete(job?._id)}
      
            className="bg-[#AF3436] text-white px-4 py-2 rounded"
        >
          Yes
        </button>
          <button
          onClick={() => setOpen(false)}
            className="bg-gray-300 px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>

    </div>
  </div>,
  document.body
)}
    </>
  )
}



