const Sequelize = require('sequelize');
const db = require('../db');

const NUM_CHARS = 5

module.exports = db.define('review', {
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      hasEnoughCharacters(value){
        if(value.length < NUM_CHARS) throw new Error(`Review must be at least ${NUM_CHARS} characters`);
      }
    }
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  }
});
