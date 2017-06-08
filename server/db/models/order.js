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
    type: Sequelize.STRING,
    defaultValue: 'CREATED',
    allowNull: false
  },
  totalPrice: {
    type: Sequelize.INTEGER,
  }
}, {
  instanceMethods: {
    calculateTotalPrice: function() {
      OrderProduct.findAll({
        where: {
          orderId: this.id
        }
      })
       .then(itemsInOrder => {
         let totalPrice = 0;
         itemsInOrder.forEach(item => {
          Product.findById(item.productId)
            .then(productInfo => {
               totalPrice += item.quantity * productInfo.price;
            })
         })
         return totalPrice / 100;
       })
       .catch(err => {
        console.error(err);
       })
    }
  }
});
