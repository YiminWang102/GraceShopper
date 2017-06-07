const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('orderproduct', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER
  }
});