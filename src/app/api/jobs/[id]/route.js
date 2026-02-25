import connectDB from "@/lib/db";
import Jobs from "@/models/Jobs";
export async function DELETE(request,{params}){
    await connectDB();
    const {id}= await params;
    await Jobs.findByIdAndDelete(id);
    return Response.json(
        {messsage:"Job  deleted successfully"},
        {status:200}
    )
}
export async function PUT(request,context){
    await connectDB();
    const {id}= await context.params;
    const body=await request.json();
    const updateJob=await Jobs.findByIdAndUpdate(
        id,body,{returnDocument:"after"} //return update document
    );
    return Response.json(updateJob,{status:200})
}