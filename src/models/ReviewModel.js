const { default: mongoose } = require("mongoose");

const reviewSchema=new mongoose.Schema(
    {
        name:String,
        comment:String,
        rating:Number
    },
    {timestamps:true}
);
export default mongoose.models.Review ||
mongoose.model("Review",reviewSchema)