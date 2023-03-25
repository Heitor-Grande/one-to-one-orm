//express
const express = require("express")
const nota = express()

//database
const modelNota= require("../models/nota")

//create
nota.post("/VincProduto/:id_produto", function(req, res){
    let id_produto = req.params.id_produto
    let nota = req.body.nota

    modelNota.create({
        nota: nota,
        id_produto: id_produto
    }).then(function(){
        res.redirect("/produto/nota")
    })

})

module.exports = nota