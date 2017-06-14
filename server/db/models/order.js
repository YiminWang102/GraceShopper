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
  },
  isDiscounted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
}, {
  instanceMethods: {
    getTotalPrice: function() {
      let totalPrice = 0
      return this.getProducts({through: {attributes: ['quantity']}})
      .then(itemsInOrder => {
        itemsInOrder.forEach(item => {
          console.log(item.orderproduct.quantity)
          totalPrice += item.orderproduct.quantity * item.price
        })
        //  console.log(itemsInOrder)
        //  return Promise.all(itemsInOrder.map((item) => {
        //    console.log(item.orderproduct)
        //    quantities.push(item.orderproduct.quantity)
        //  }))
          if (this.isDiscounted) {
            return (totalPrice / 100) / 2
          }
          else {
            return totalPrice / 100
          }
       })
      //  .then(result => {
      //    result.forEach((item, index) => {
      //      totalPrice += (item.orderproduct.price / 100) * quantities[index]
      //    })
      //    if (this.isDiscounted){
      //      return totalPrice / 2
      //    }
      //    return totalPrice
      //  })
       .catch(err => {
        console.error(err);
       })
    }
  }
});
