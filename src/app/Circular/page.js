import React from 'react'
import AllJobs from '../components/AllJobs'
import connectDB from "@/lib/db"
import Jobs from "@/models/Jobs"
import jobPoster from "@/models/jobPoster"
import ReviewForm from '../components/ReviewForm'
import JobPoster from '../components/JobPoster'

async function getJobs() { 
  await connectDB()
  const jobs = await Jobs.find().lean()
  return JSON.parse(JSON.stringify(jobs))
}

async function getJobsPoster() {
  await connectDB()
  const poster = await jobPoster.find().lean()
  return JSON.parse(JSON.stringify(poster))
}
export default async function   Circular() {
    const jobs = await getJobs()
      const poster = await getJobsPoster()
  return (
    <div>
      {
        poster?.length>0 && <JobPoster poster={poster}/>
      }
        <AllJobs jobs={jobs}/>

        <ReviewForm/>
    </div>
  )
}
