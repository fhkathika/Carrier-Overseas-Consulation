"use client"
import React, { useState } from 'react'
import StartRating from './StartRating'
export const dynamic = "force-dynamic"
export default function ReviewForm() {
   const [loading, setLoading] = useState(false)
    const [formData,setFormData]=useState({
name: "",
comment: "",
rating: 0,

    })

    const handleChange=(e)=>{
        console.log("first clicked")
        const {name,value}=e.target
 setFormData((prev)=>({
    ...prev,
    [name]:value,
 }))
    }
    const handleSubmit=async(e)=>{
e.preventDefault()
setLoading(true)
try{
const res=await fetch("/api/createReview",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(formData)

})
const data=await res.json();
console.log("data",data)
if(res.ok){
    alert("Your Review Added Successfully ✅")
    setFormData({
       name: "",
comment: "",
rating: 0,
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
    <div className='max-w-xl mx-auto mt-10'>
   
         <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12'>
    <h3 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center'>
   Your Feedback Matters!
    </h3>
  </div>
      
 <form onSubmit={handleSubmit} className='space-y-4'>
           <div className="flex flex-col gap-2">
  <label className="text-sm font-semibold">
   Name
  </label>

  <input
    type="text"
    name="name"
    required
    value={formData.name}
    onChange={handleChange}
    className="border p-2 rounded-md"
  />
</div>
  
   <div className="flex flex-col gap-2">
  <label className="text-sm font-semibold">
    Share Your Openion
  </label>

<textarea 
name="comment"
required
value={formData?.comment}
onChange={handleChange}
className='w-full border p-2 rounded'
/>

</div>
   <div className="flex flex-col gap-2">
  <label className="text-sm font-semibold">
    Please Rate us
  </label>

<StartRating rating={formData?.rating} setFormData={setFormData}/>
</div>  
<div className='flex justify-between'>
<button
  type="submit"
  disabled={loading}
  className="bg-[#e82e31] text-white px-6 py-2 rounded mb-6"
>
  {loading && (
    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
  )}
  {loading ? "Processing..." : "Send"}
</button>
</div>


        </form>
       
    </div>
  )
}
