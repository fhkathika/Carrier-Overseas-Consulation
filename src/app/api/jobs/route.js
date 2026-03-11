
import connectDB from "@/lib/db";
import jobPoster from "@/models/jobPoster";
import Jobs from "@/models/Jobs";
import { NextResponse } from "next/server";

// POST a job 
// export async function POST(request){
//     await connectDB()
//     const body=await request.json()
//     const job=await Jobs.create(body)
//     return Response.json(job,{status:201})
// }

export async function POST(req) {
  await connectDB()

  const { secret, ...jobData } = await req.json()

  if (secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  const job = await Jobs.create(jobData)

  return NextResponse.json(job, { status: 201 })
}

export async function GET(){
    await connectDB()
    const jobs=await Jobs.find().sort({createdAt:-1})
    return Response.json(jobs)
}


