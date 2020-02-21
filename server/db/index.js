const db = require('./db');
const User = require('./models/user');
const Stock = require('./models/stock');
const Portfolio = require('./models/portfolio');
const Transaction = require('./models/transaction');


// associations go here
User.hasMany(Transaction);
Transaction.belongsTo(Stock);
Stock.belongsToMany(User, { through: Portfolio });

module.exports = { 
  db,
  User,
  Stock,
  Transaction,
  Portfolio
};