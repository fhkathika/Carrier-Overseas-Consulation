import dynamicImport from "next/dynamic"
import connectDB from "@/lib/db"
import Jobs from "@/models/Jobs"
import jobPoster from "@/models/jobPoster"

export const dynamic = "force-dynamic"

// ✅ Lazy components
const Hero = dynamicImport(() => import("./components/Hero"))
const FlowchartHomepage = dynamicImport(() => import("./components/FlowchartHomepage"))
const Client_Logo = dynamicImport(() => import("./components/Client_Logo"))
const Reviews = dynamicImport(() => import("./components/Reviews"))
const Testimonials = dynamicImport(() => import("./components/Testimonials"))

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
      <FlowchartHomepage />
      <Client_Logo />
      <Reviews />
      <Testimonials />
    </>
  )
}