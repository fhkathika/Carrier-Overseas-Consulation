import connectDB from "@/lib/db";
import jobPoster from "@/models/jobPoster";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import JobPoster from "@/models/jobPoster";

export async function POST(req) {
  try {
    await connectDB();

    const data = await req.formData();
    const title = data.get("title");
    const startDate = data.get("startDate");
    const endDate = data.get("endDate");
    const image = data.get("image");

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = Date.now() + "_" + image.name;

    const uploadDir = path.join(process.cwd(), "public/PosterFolder");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filepath = path.join(uploadDir, filename);
    fs.writeFileSync(filepath, buffer); // <-- important!

    const newJob = new jobPoster({
      title,
      startDate,
      endDate,
      image: `/PosterFolder/${filename}`, // URL path
    });

    await newJob.save();

    return NextResponse.json({ message: "Saved ✅" }, { status: 201 });
  } catch (err) {
    console.error("Error saving job:", err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET(){
    await connectDB()
    const poster=await JobPoster.find().sort({createdAt:-1})
    return Response.json(poster)
}