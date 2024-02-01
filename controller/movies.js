import movies from "../model/movies.js"
export const add_movies=async(req,res)=>{
    try{
        const payload=await req.body
        await new movies(payload).save();
        return res.status(200).json({msg:"movie added successfully"})
    }catch(err){
        return console.log(err)
    }
}