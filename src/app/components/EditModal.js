"use client"
import { useState } from "react"
import { createPortal } from "react-dom"
export default function EditModal({job}) {
  const [open, setOpen] = useState(false);
  const [formData,setFormData]=useState({
    category:job?.category || "",
      describtion: job?.describtion || "",
  requirment: job?.requirment || "",
  vacancies: job?.vacancies || "",
  salary: job?.salary || "",
  deadline: job?.deadline
    ? job.deadline.substring(0, 10)
    : "",
  })
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData((prev)=>({
...prev,
[name]:value
    }))
  }
const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log("click id ...", job?._id)
    try{
const res=await fetch(`/api/jobs/${job?._id}`,{
    method:"PUT",
    headers:{
       "Content-Type":"application/json"
    },
    body:JSON.stringify(formData),
});
if(!res.ok){
    alert("Update failed ❌");
    return
}
alert("Job Updated Successfully ✅");
location.reload()
}
catch(error){
   console.log("Update error:", error);
}
}
  return (
    <>
      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className=" ml-auto px-2 py-2 rounded  border-[#772828]rounded-lg group-hover:bg-white group-hover:text-[#772828] transition duration-300"
      >
        ✎
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
placeholder="deadline"
value={formData.deadline}
onChange={handleChange}
className='w-full border p-2 rounded'
/>
</div>
<div className="flex">
<button type='submit' className='bg-[#e82e31] text-white px-6 py-2 rounded mb-6'>
Update
</button>
 <button
          onClick={() => setOpen(false)}
          className="bg-gray-300 px-4 py-2 rounded mb-6 ml-2"
        >
          Cancel
        </button>
</div>

        </form>
       
 

      {/* <div className="mt-4 flex gap-3">
        <button
          onClick={() => setOpen(false)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>

       
      </div> */}

    </div>
  </div>,
  document.body
)}
    </>
  )
}