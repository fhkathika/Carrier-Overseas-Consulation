import Hero from "./components/Hero"
import AllJobs from "./components/AllJobs"
import AboutUs from "./components/AboutUs"
import Reviews from "./components/Reviews"
import connectDB from "@/lib/db"
import Jobs from "@/models/Jobs"
import jobPoster from "@/models/jobPoster"
import Testimonials from "./components/Testimonials"
import Client_Logo from "./components/Client_Logo"
import JobPoster from "./components/JobPoster"
import Chart from "./components/Chart"


export const dynamic = "force-dynamic"

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

export default async function Home() {
  const jobs = await getJobs()
  const poster = await getJobsPoster()
  return (
    <>
      <Hero />
      {/* <Chart/> */}
      <section id="jobPortal">
     
        {/* <AllJobs jobs={jobs} /> */}
      </section>
      <Reviews />
   
      <Client_Logo/>
    </>
  )
}