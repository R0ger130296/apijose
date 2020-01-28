const Sequelize = require("sequelize");

const db = require("../database/db");
const Persona = require("./persona");
const Menu = require("./menu");

module.exports = db.sequelize.define("pedido", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idpersona: {
      type: Sequelize.INTEGER,
      references: {
        model: Persona,
        key: 'id'
      }
    },
    idmenu: {
      type: Sequelize.INTEGER,
      references: {
        model: Menu,
        key: 'id'
      }
    },
    cantidad: {
      type: Sequelize.INTEGER
    },
});