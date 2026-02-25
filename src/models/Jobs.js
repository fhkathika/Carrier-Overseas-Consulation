const { default: mongoose } = require("mongoose");

const JobSchema=new mongoose.Schema({
    category:{ 
        type: String,
  required: true},

    describtion:{ 
        type: String,
  required: true},

    requirment:{ 
        type: String,
  required: true},

    vacancies:{ 
        type: Number,
  required: true},

    salary:{ 
        type: String,
  required: true},
  
    deadline: {
  type: Date,
  required: true,
},
},{timestamps:true})
export default mongoose.models.Job || mongoose.model("Job",JobSchema)