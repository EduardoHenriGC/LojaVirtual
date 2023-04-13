import express from "express"

import Produtos from "./routes/produto.js"
import Livro from "./routes/livros.js"
import Jogos from "./routes/jogos.js"
import Mangas from "./routes/mangas.js"
import Colecionaveis from "./routes/colecionaveis.js"
import Search from "./routes/search.js"


import cors from "cors"


const app = express()

app.use(express.json())
app.use(cors())

app.use("/",Produtos, Livro,Jogos,Mangas, Colecionaveis, Search)

app.listen(8800)