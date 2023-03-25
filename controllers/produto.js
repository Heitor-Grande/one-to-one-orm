//express
const express = require("express")
const produto = express()

//model produto
const modelProduto = require("../models/produto")

//model nota
const modelNota = require("../models/nota")



//insert produto
produto.post("/add", function(req, res){
    
    let nome = req.body.nome
    let preco = req.body.preco
    
    modelProduto.create({
        nome: nome,
        preco: preco
    }).then(function(){
        res.redirect("/")
    })
})

//produto - nota
produto.get("/produto/nota", function(req, res){
    modelProduto.findAll().then(function(produtos){
            
        modelNota.findAll().then(function(notaProduto){
                res.send({produtos, notaProduto})
            })
        
        })
})

module.exports = produto