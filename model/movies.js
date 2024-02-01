import mongoose from "mongoose"
const movieSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    poster:{
        type:String,
        required:true,
        unique:true
    },
    rating:{
        type:Number,
        required:true
    }
})
export default mongoose.model("movies",movieSchema)
