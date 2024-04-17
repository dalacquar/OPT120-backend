const { Sequelize, DataTypes } = require("sequelize");
const db = require("../../db.js");

const Activity = db.define("activities", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Activity;
