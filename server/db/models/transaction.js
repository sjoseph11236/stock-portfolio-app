const Sequelize = require('sequelize');
const db = require('../db');

const Transaction = db.define('transaction', { 
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn:[["BUY", "SELL"]]
    }
  },
  date: {
    type:Sequelize.DATE,
  },
  quantity: { 
    type: Sequelize.INTEGER, 
    allowNull: false,
    defaultValue: 1, 
    validate: { 
      min: 1
    }
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { 
      min: 0 
    }
  }
});

module.exports = Transaction;