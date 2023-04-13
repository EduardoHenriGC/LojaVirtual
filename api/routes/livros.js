import express from "express";
import {getLivros} from "../controller/livros.js"

const router = express.Router()


router.get("/livros", getLivros)



export default router