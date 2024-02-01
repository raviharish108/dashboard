import express from "express"
import userRouter from "./routes/user.js"
import movieRouter from "./routes/movies.js"
import mongoose from "mongoose"
import cors from "cors"
import * as dotenv from "dotenv"
dotenv.config()
const Port=4000;
const app=express();
app.use(express.json())
app.use(cors())
const mongo_url=process.env.mongo_url

const connect = () => {
    mongoose.connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  mongoose.set('strictQuery', false))
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));
  };

  app.use("/api/user",userRouter)
  app.use("/api/movies",movieRouter)
app.listen(Port,async()=>{
    await connect()
    console.log(`server is runninng on  ${Port}`)
})