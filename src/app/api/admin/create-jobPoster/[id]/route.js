import connectDB from "@/lib/db";
import jobPoster from "@/models/jobPoster";
export async function DELETE(request,{params}){
    await connectDB();
    const {id}= await params;
    await jobPoster.findByIdAndDelete(id);
    return Response.json(
        {messsage:"Job Poster  deleted successfully"},
        {status:200}
    )
}