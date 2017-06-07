const Sequelize = require('sequelize');
const db = require('../db');

/** 

TODO
- create instance method for calculatingTotalPrice

*/

module.exports = db.define('order', {
  shippingInfo: {
    type: Sequelize.STRING,
    defaultValue: '',
    allowNull: false
  },
  paymentInfo: {
    type: Sequelize.STRING,
    defaultValue: '',
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('CREATED, PROCESSING, CANCELLED, COMPLETED'),
    allowNull: false
  }
});