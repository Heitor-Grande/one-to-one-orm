//express
const express = require("express")
const publico = express()

//database
const modelProduto = require("../models/produto")

//get
publico.get("/", function(req, res){
    modelProduto.findAll().then(function(produtos){
        res.send(produtos)
    })
})

module.exports = publico