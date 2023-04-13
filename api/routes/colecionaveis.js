import express from "express";
import {getColecionavel} from "../controller/colecionaveis.js"

const router = express.Router()


router.get("/colecionaveis", getColecionavel)



export default router