const Sequelize = require('sequelize');
const db = require('../db');

const Stock = db.define('stock', { 
  symbol: {
    type: Sequelize.STRING,
    allowNull: false, 
    validate: { 
      notEmpty: true,
    }
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false, 
    validate: { 
      notEmpty: true,
    }
  },
});

module.exports = Stock;