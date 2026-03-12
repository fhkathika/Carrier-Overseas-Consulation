
"use client"
import { useState } from "react"
import { createPortal } from "react-dom"
import Editor from "./Editor";
export default function CreateJobPosterModal() {
  const [open, setOpen] = useState(false);
  const [loading,setLoading]= useState(false);
 const [formData,setFormData]=useState({
  title:"",
  startDate:"",
  endDate:"",
  image:null
 })

 const handleChange=(e)=>{
const {name,value,files}=e.target
if(name==="image"){
  setFormData({...formData,image:files[0]})
}
else{
    setFormData({...formData,[name]:value})
}
}
const handleSubmit=async(e)=>{
e.preventDefault()
setLoading(true)
const data=new FormData()
data.append("title",formData.title)
data.append("startDate",formData.startDate)
data.append("endDate",formData.endDate)
data.append("image",formData.image)
try{
const res=await fetch("/api/admin/create-jobPoster",{
  method:"POST",
  body:data
})
if(res.ok){
    alert("Job Created Successfully ✅")
    setFormData({
title: "",
startDate: "",
endDate: "",
image: null,

    })
}
}
catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)  // ✅ stop loading
    }
}

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-[#e82e31] text-white px-2 py-2 rounded mb-6 sm:px-6 "
      >
        Add Job Poster
      </button>

      {/* Modal */}
     {open && createPortal(
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"  >
    <div className="bg-white p-6 rounded-lg w-full max-w-lg relative  max-h-[90vh] overflow-y-auto" >

      {/* Close Button */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-3 right-3 text-xl"
      >
        ✖
      </button>

        <form onSubmit={handleSubmit} className='space-y-4'>
         
 <div className="flex flex-col gap-2">
  <label className="text-sm font-semibold">
    Job Title
  </label>

  <input
      type="text"
      name="title"
      required
       value={formData.title}
      placeholder="Job Title"
      onChange={handleChange}
      className="border p-2 w-full"
      />

</div>
 <div className="flex flex-col gap-2">
  <label className="text-sm font-semibold">
    From
  </label>

  <input
      type="date"
      required
      name="startDate"
       value={formData.startDate}
      onChange={handleChange}
      className="border p-2 w-full"
      />

</div>
 <div className="flex flex-col gap-2">
  <label className="text-sm font-semibold">
 To
  </label>

  <input
      type="date"
      name="endDate"
      required
      value={formData.endDate}
      onChange={handleChange}
      className="border p-2 w-full"
      />

</div>
 <div className="flex flex-col gap-2">
  <label className="text-sm font-semibold">
 Upload Poster
  </label>

  <input
      type="file"
      name="image"
      required
      value={formData.image}
      onChange={handleChange}
      className="border p-2 w-full"
      />

</div>
<div className="flex">

<button
  type="submit"
  disabled={loading}
  className="bg-[#e82e31] text-white px-6 py-2 rounded mb-6"
>
  {loading && (
    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
  )}
  {loading ? "Processing..." : "Create"}
</button>

 <button
          onClick={() => setOpen(false)}
          className="bg-gray-300 px-4 py-2 rounded mb-6 ml-2"
        >
          Cancel
        </button>
</div>

        </form>
       
 
    </div>
  </div>,
  document.body
)}
    </>
  )
}
