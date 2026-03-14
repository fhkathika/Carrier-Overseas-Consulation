
import connectDB from "@/lib/db"
import DeleteModal from "../../components/DeleteModal"
import EditModal from "../../components/EditModal"
import Jobs from "@/models/Jobs"
import AllPosters from "../../components/AllPosters"



export const dynamic = "force-dynamic"

async function getJobs() {
  await connectDB()
  const jobs = await Jobs.find().lean()
  return JSON.parse(JSON.stringify(jobs))
}


export default async function JobPortal() {
  const jobs = await getJobs()

  return (
    <>
      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12 mt-12">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-red-600">
          All Circular Jobs
        </h3>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job._id}   // ✅ better than index
            className="group relative overflow-hidden rounded-br-lg shadow-lg bg-white p-6 transition duration-500 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#AF3436] to-[#e82e31] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

            {/* Content */}
            <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
              <h3 className="text-xl font-semibold mb-2">
                {job?.category}
              </h3>

              <p className="mb-2 opacity-70 group-hover:opacity-100">
                Vacancy : <strong>{job?.vacancies}</strong>
              </p>
              <p className="mb-2 opacity-70 group-hover:opacity-100">
                Salary : <strong>{job?.salary}</strong>
              </p>

              <p className="mb-2 opacity-70 group-hover:opacity-100">
                <span className="font-medium">Deadline:</span>{" "}
                <strong>
                  {new Date(job?.deadline).toLocaleDateString()}
                </strong>
              </p>

              <hr className="mb-4 text-gray-300" />

              {/* <p className="mb-2 text-sm opacity-70 group-hover:opacity-100 line-clamp-3">
                {job?.describtion}
              </p> */}
               <div className="job-description line-clamp-3">
            <div dangerouslySetInnerHTML={{ __html: job?.describtion }} />
          </div>
<div className="flex">
              {/* Edit Button + Modal */}
              <div className="mt-4">
                <EditModal job={job}  />
              </div>
              <div className="mt-4 ml-2">
                <DeleteModal item={job} path="/api/jobs" />
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
<AllPosters/>


    </>
  )
}