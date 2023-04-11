import express from "express";
import {getProdutos} from "../controller/produto"

const router = express.Router()


router.get("/produtos", getProdutos)



export default router