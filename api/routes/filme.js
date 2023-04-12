import express from "express";
import {getProdutos} from "../controller/filmes.js"

const router = express.Router()


router.get("/Produtos", getProdutos)



export default router