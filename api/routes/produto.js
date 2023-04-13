import express from "express";
import {getProdutos} from "../controller/produto.js"

const router = express.Router()


router.get("/Produtos", getProdutos)



export default router