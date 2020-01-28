const Sequelize = require("sequelize");

const db = require("../database/db");

module.exports=db.sequelize.define("menu",{
    id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    foto:{
      type: Sequelize.BLOB
    },
    descripcion: {
      type: Sequelize.STRING
    },
    precio: {
      type: Sequelize.NUMBER
    },
    fecha: {
      type: Sequelize.DATE
    }
  });
  