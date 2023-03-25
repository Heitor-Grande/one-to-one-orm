//sequelize
const sequelize = require("sequelize")

//database
const database = require("../db/dbconnection")

//modelProduto
const modelProduto = require("./produto")

const nota = database.define("notas", {
    nota: {
        type: sequelize.REAL
    }
})

nota.belongsTo(modelProduto, {
    constraint: true,
    foreignKey: "id_produto"
})

module.exports = nota