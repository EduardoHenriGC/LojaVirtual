import express from "express"

import Teste from "./routes/filme.js"


import cors from "cors"


const app = express()

app.use(express.json())
app.use(cors())

app.use("/",Teste)

app.listen(8800)