import express from "express";
import {getMangas} from "../controller/mangas.js"

const router = express.Router()


router.get("/mangas", getMangas)



export default router