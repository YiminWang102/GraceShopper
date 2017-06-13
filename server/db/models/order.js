const Sequelize = require('sequelize');
const db = require('../db');

const OrderProduct = require('./orderproduct');
const Product = require('./product');

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
    type: Sequelize.INTEGER, // 1: Created, 2: Processing, 3: Cancelled, 4, Completed
    defaultValue: 1,
    allowNull: false
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
}, {
  instanceMethods: {
    getTotalPrice: function() {
      let totalPrice = 0
      return OrderProduct.findAll({
        where: {
          orderId: this.id
        }
      })
       .then(itemsInOrder => {
         return Promise.all(itemsInOrder.map((item) => {
           return Product.findById(item.productId)
         }))
       })
       .then(result => {
         result.forEach(item => {
           totalPrice += (item.price / 100)
         })
         return totalPrice
       })
       .catch(err => {
        console.error(err);
       })
    }
  }
});
