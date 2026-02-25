import connectDB from '@/lib/db'
import Jobs from '@/models/Jobs'
import { notFound } from 'next/navigation'
import React from 'react'
import Tab from '@/app/components/Tab'

export default async function jobDetail({params}) {
   
    const {id}=await params 
    
    await connectDB()
    const jobs= await Jobs.findById(id).lean()
    if(!jobs){
        return notFound()
    }
    console.log("jobs,",jobs)
  return (
    <div className="max-w-3xl mx-auto p-6">
    <h1 className="font-semibold text-lg sm:text-xl mb-3 mt-2 text-red-600">{jobs?.category}</h1>
    {/* <p className="mt-2 text-gray-600">{jobs?.vacancies}</p>
    <p className="mt-4">{jobs?.describtion}</p> */}
    <div className=' flex flex-col md:flex-row md:justify-between p-5 rounded-xl shadow hover hover:shadow-xl transition'>
<div className='flex flex-col gap-2 text-sm text-gray-600'>
<div>
    <span className='font-medium'>Vacancy:</span><strong>{jobs?.vacancies}</strong>
</div>
<div>
    <span className='font-medium'>Salary:</span><strong> {jobs?.salary}</strong>
</div>

</div>
<div className="mt-2  text-sm text-gray-600">
    <span className='font-medium'>Application Deadline:</span>{" "}
  <strong>  {new Date(jobs?.deadline).toLocaleDateString()}</strong>
</div>
    </div>


<Tab jobs={JSON.parse(JSON.stringify(jobs))}/>
<div className='mt-6 '>  
 <p> <strong>For Job Seekers:</strong> Apply Now Advance your career for better living through our verified overseas opportunities.</p>
<ul>
    <li>•  <strong>How to Apply:</strong> Browse our current listings and send your updated CV to <strong>coc@ahmedamin.com</strong>.</li>
    <li>•  <strong>Mandatory Subject Line:</strong> [Job Title] - [Your Full Name].</li>
</ul>



</div>
    </div>
  )
}
