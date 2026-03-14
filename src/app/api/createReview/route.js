import connectDB from "@/lib/db";
import ReviewModel from "@/models/ReviewModel";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
const body=await req.json();
const {name,comment,rating}=body;
await connectDB();
const newReview=await ReviewModel.create({
name,
comment,
rating
});
return NextResponse.json(
    {message:"Review added successfully",data:newReview},
    {status:201}
);
    }
    catch(error){
         console.log(error)
        return NextResponse.json(
            {message:"Something went wrong",error},
            {status:500}
        )
    }
}

export async function GET(){
    await connectDB();
    const reviews=await ReviewModel.find().sort({createdAt:-1})
    return Response.json(reviews)

}