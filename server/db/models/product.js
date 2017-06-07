const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('product', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://i.redd.it/uh4wjeypg46y.jpg',
    validate: {
      isUrl: true
    }
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  category: {
    type: Sequelize.STRING,
    defaultValue: '',
    allowNull: false
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 500,
    }
  }
});
