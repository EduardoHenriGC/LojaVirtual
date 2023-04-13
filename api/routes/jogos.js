import express from "express";
import {getJogos} from "../controller/jogos.js"

const router = express.Router()


router.get("/jogos", getJogos)



export default router