"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export default function CreateJob() {
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
const res=await fetch("/api/jobs",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        ...formData,
        vacancies:Number(formData.vacancies),
        deadline:new Date(formData.deadline)
    
    })

})
  console.log(" clicked....",formData)
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

<textarea 
name="describtion"
required
value={formData.describtion}
onChange={handleChange}
className='w-full border p-2 rounded'
/>
</div>
   <div className="flex flex-col gap-2">
  <label className="text-sm font-semibold">
    Required Qualification
  </label>

<textarea 
name="requirment"
required
value={formData.requirment}
onChange={handleChange}
className='w-full border p-2 rounded'
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
<button type='submit' className='bg-[#e82e31] text-white px-6 py-2 rounded mb-6'>
Submit
</button>
<Link href="/jobPortal" className='bg-[#e82e31] text-white px-6 py-2 rounded mb-6'>
View Jobs
</Link> 
</div>


        </form>
       
    </div>
  )
}
