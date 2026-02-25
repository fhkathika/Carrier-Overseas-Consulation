
import connectDB from "@/lib/db";
import Jobs from "@/models/Jobs";

// POST a job 
export async function POST(request){
    await connectDB()
    const body=await request.json()
    const job=await Jobs.create(body)
    return Response.json(job,{status:201})
}
export async function GET(){
    await connectDB()
    const jobs=await Jobs.find().sort({createdAt:-1})
    return Response.json(jobs)
}