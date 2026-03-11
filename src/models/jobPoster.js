import mongoose from "mongoose";

const JobPosterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  image: { type: String, required: true },
}, { timestamps: true });

const JobPoster = mongoose.models.JobPoster || mongoose.model("JobPoster", JobPosterSchema);
export default JobPoster;