import React from 'react'
import AllJobs from '../components/AllJobs'
import Link from 'next/link'
import Modal from '../components/Modal'
async function getJobs(){
  const res=await fetch("http://localhost:3000/api/jobs",{
    cache:"no-store",
  })
 return  res.json()
}
export default async function jobPortal() {
  const jobs= await getJobs()
console.log("jobs..",jobs)
  return (
    <>
      {/* // <h2 className="text-2xl font-bold mb-6">All Jobs</h2> */}
       <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12 mt-12'>
    <h3 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center text-red-600'>
      All Circular Jobs
    </h3>
  </div>
      <div className='max-w-6xl mx-auto my-6 grid grid-cols-1 sm:grid-cols-3 gap-4 '>
    
        {
          jobs.map((job,index)=>(
            <div key={index} className="   group relative overflow-hidden rounded-br-lg shadow-lg bg-white p-6 transition duration-500 hover:-translate-y-2 hover:shadow-xl ">

        {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#AF3436] to-[#e82e31] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

        {/* Content */}
        <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
          <h3 className="text-xl font-semibold mb-2">{job?.category}jhkhk</h3>
          <p className="mb-2 opacity-70 group-hover:opacity-100 "> Vacancy : <strong>{job?.vacancies}</strong> </p>
          {/* <p className="mb-4 opacity-70 group-hover:opacity-100">{jobs?.salary}</p> */}
          <p className=" flex flex-end mb-2 opacity-70 group-hover:opacity-100 "><span className='font-medium'>Deadline: </span>{" "}
  <strong>  {new Date(job?.deadline).toLocaleDateString()}</strong></p> 
          <hr className='mb-4 text-gray-300'/>
          {/* <p className="mb-4 text-gray-400">{jobs.describtion}</p> */}
          <p
  className={`mb-2 text-sm transition-all duration-300 opacity-70 group-hover:opacity-100 ${
    "line-clamp-3"
  }`}
>
  {job?.describtion}
</p>


{/* <div className='flex justify-between'> */}
{/* <div className='flex '>
  <Link className=" ml-auto px-2 py-2 rounded border border-[#772828]rounded-lg group-hover:bg-white group-hover:text-[#772828] transition duration-300">
            ✎
          </Link>
  <button className=" ml-auto px-2 py-2 rounded border border-[#772828]rounded-lg group-hover:bg-white group-hover:text-[#772828] transition duration-300">
           🗑
          </button>
</div> */}



<Modal/>

{/* <div className='flex flex-end'>
  <button className=" ml-auto px-2 py-2 rounded border border-[#772828]rounded-lg group-hover:bg-white group-hover:text-[#772828] transition duration-300">
            View Detail
          </button>
</div> */}
{/* </div> */}
        
        </div>

      </div>
          ))
        }          
      
    
     
  
           
</div>


</>
  
  )
}
