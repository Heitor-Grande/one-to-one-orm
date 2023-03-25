//express
const express = require("express")
const app = express()

//porta servidor
app.listen("8080", function(){
    console.log("RODANDO NA PORTA 8080")
})

//bodyparser
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false}))

//database
const database = require("./db/dbconnection")
database.authenticate().then(function(){
    try {
        console.log("banco criado ou conectado com sucesso")
    } 
    catch (erro) {
        console.log(erro)
    }
})


//nota controller
const nota = require("./controllers/nota")
app.post("/VincProduto/:id_produto", nota)

//produto controller
const produto = require("./controllers/produto")
app.post("/add", produto)
app.get("/produto/nota", produto)

//publico controller
const publico = require("./controllers/publico")
app.get("/", publico)
