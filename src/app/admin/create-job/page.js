"use client"
import Editor from '@/app/components/Editor'
import Link from 'next/link'
import React, { useState } from 'react'
export const dynamic = "force-dynamic"
export default function CreateJob() {
   const [loading, setLoading] = useState(false)
    const [formData,setFormData]=useState({
category: "",
describtion: "",
requirment: "",
vacancies: "",
salary: "",
deadline:""
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
const res=await fetch("/api/jobs",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        ...formData,
        describtion:formData?.describtion,
        requirment:formData?.requirment,
        vacancies:Number(formData.vacancies),
        deadline:new Date(formData.deadline),
         secret: "superadmin123",
    // title: "Frontend Developer",
    // company: "ABC Ltd",
    
    })

})
if(res.ok){
    alert("Job Created Successfully ✅")
    setFormData({
        category: "",
describtion: "",
requirment: "",
vacancies: "",
salary: "",
deadline:""
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
        
        <h2 className='text-2xl font-bold mb-6'>Create Job</h2>

        <form onSubmit={handleSubmit} className='space-y-4'>
           <div className="flex flex-col gap-2">
  <label className="text-sm font-semibold">
    Job Title
  </label>

  <input
    type="text"
    name="category"
    value={formData.category}
    onChange={handleChange}
    className="border p-2 rounded-md"
  />
</div>
   <div className="flex flex-col gap-2">
  <label className="text-sm font-semibold">
    Job Describtion
  </label>
{/* <Editor name="describtion" className='w-full border p-2 rounded' required value={formData.describtion} onChange={handleChange}/> */}
<Editor 
name="describtion"
value={formData.describtion}
onChange={handleChange}
/>
</div>
   <div className="flex flex-col gap-2">
  <label className="text-sm font-semibold">
    Required Qualification
  </label>

<Editor 
name="requirment"
value={formData.requirment}
onChange={handleChange}
// className='w-full border p-2 rounded'
/>

</div>
   <div className="flex flex-col gap-2">
  <label className="text-sm font-semibold">
    Vacancies
  </label>

<input 
type="number"
name="vacancies"
required
placeholder="Vacancies"
value={formData.vacancies}
onChange={handleChange}
className='w-full border p-2 rounded'
/>
</div>
   <div className="flex flex-col gap-2">
  <label className="text-sm font-semibold">
    Salary
  </label>

<input 
type="text"
name="salary"
required
placeholder="salary"
value={formData.salary}
onChange={handleChange}
className='w-full border p-2 rounded'
/>
</div>
   <div className="flex flex-col gap-2">
  <label className="text-sm font-semibold">
    Deadline
  </label>

<input 
type="date"
name="deadline"
required
placeholder="deadline"
value={formData.deadline}
onChange={handleChange}
className='w-full border p-2 rounded'
/>
</div>
<div className='flex justify-between'>
{/* <button type='submit' className='bg-[#e82e31] text-white px-6 py-2 rounded mb-6'>
Submit
</button> */}
<button
  type="submit"
  disabled={loading}
  className="bg-[#e82e31] text-white px-6 py-2 rounded mb-6"
>
  {loading && (
    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
  )}
  {loading ? "Processing..." : "Create Job"}
</button>
{/* <Link href="/admin/jobPortal" className='bg-[#e82e31] text-white px-6 py-2 rounded mb-6'>
View Jobs
</Link>  */}
</div>


        </form>
       
    </div>
  )
}
