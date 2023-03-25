//sequelize
const sequelize = require("sequelize")

//database
const database = require("../db/dbconnection")


//model produto
const produto = database.define("produtos", {
    nome: {
        type: sequelize.TEXT
    },
    preco: {
        type: sequelize.REAL
    }
})

module.exports = produto