const  express = require("express")
const  app = express()
const port = process.env.PORT || 3000

const  conteudo = require ("./src/conteudo/api.json")


app.get("/conteudo",  (reg,res)  => {
    return  res.json(api)
})


app.listen(port, () => {
    console.log("Servidor está rodando..." )
}) 