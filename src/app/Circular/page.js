import React from 'react'
import AllJobs from '../components/AllJobs'
import connectDB from "@/lib/db"
import Jobs from "@/models/Jobs"
import ReviewForm from '../components/ReviewForm'
async function getJobs() {
  await connectDB()
  const jobs = await Jobs.find().lean()
  return JSON.parse(JSON.stringify(jobs))
}
export default async function   Circular() {
    const jobs = await getJobs()
  return (
    <div>
        <AllJobs jobs={jobs}/>

        <ReviewForm/>
    </div>
  )
}
