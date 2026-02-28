import Hero from "./components/Hero"
import AllJobs from "./components/AllJobs"
import AboutUs from "./components/AboutUs"
import Reviews from "./components/Reviews"
import connectDB from "@/lib/db"
import Jobs from "@/models/Jobs"


export const dynamic = "force-dynamic"

async function getJobs() {
  await connectDB()
  const jobs = await Jobs.find().lean()
  return JSON.parse(JSON.stringify(jobs))
}

export default async function Home() {
  const jobs = await getJobs()

  return (
    <>
      <Hero />
      <section id="about">
        <AboutUs />
      </section>
      <section id="jobPortal">
        <AllJobs jobs={jobs} />
      </section>
      <Reviews />
    </>
  )
}