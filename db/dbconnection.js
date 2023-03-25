//sequelize
const sequelize = require("sequelize")
const database = new sequelize({
    dialect: "sqlite",
    storage: "./db/onetone.db"
})

module.exports = database