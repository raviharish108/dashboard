import express from "express"
import {add_movies} from "../controller/movies.js"
const router=express.Router()
router.post("/addmovies",add_movies)
export default router