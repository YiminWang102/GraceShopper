const Sequelize = require('sequelize');
const db = require('../db');
const hstore = require('pg-hstore')();

const Product = require('./product');


module.exports = db.define('order', {
  items: {
    type: Sequelize.ARRAY(Sequelize.HSTORE),
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('Created', 'Processing', 'Cancelled', 'Completed')
  }
}, 
{
   instanceMethods: {

      getTotalItems: function () {
        let totalItems = 0;
        
        hstore.parse(this.items, (result) => {
          totalItems = Object.values(result).reduce((a,b) => {
            return a + b;
          }, 0)
        });

        return totalItems;
      },

      calculateTotalPrice: function() {
        let total = 0;
        
        hstore.parse(this.items, (result) => {
          let productIDs = Object.keys(result);

          productIDs.forEach((id) => {
            Product.findById(id)
              .then((product) => {
                total += product.price * result[id];
              })
          });
        });

        return total;
      }

   },
   validate: {

      checkQuantity() {
        hstore.parse(this.items, (result) => {
          Object.keys(result).forEach((productQuantity) => {
            if (productQuantity < 1) {
              throw new Error('Product in Order must be at least 1, unless you\'re deleting it from Order');
            }
          })
        })
      }

    }
});
