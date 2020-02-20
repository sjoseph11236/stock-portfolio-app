const Sequelize = require('sequelize');
const db =  require('../db');

const User = db.define('user', { 
  name: { 
    type: Sequelize.STRING,
    allowNull: false,
    validate: { 
      notEmpty: true
    }
  }, 
  email: { 
    type: Sequelize.STRING,
    allowNull: false, 
    unique: true,
    validate: { 
      notEmpty: true,
      isEmail: true
    }
  }, 
  password: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      len: [4, 10],
      isAlphanumerica: true
    }
  },
  cash:{
    type: Sequelize.INTEGER,
    defaultValue: 500000
  }
});

module.exports = User; 