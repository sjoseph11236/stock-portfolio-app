const Sequelize = require('sequelize');
const { Op } = Sequelize;
const { User, Stock, Transaction, Portfolio } = require('../server/db');
const users = require('./data/user.json');
const stocks = require('./data/stock.json');
const transactions = require('./data/transaction.json');
const portfolios = require('./data/portfolio.json');
const {green, yellow} = require('chalk')

console.log(yellow('Opening database connection'));

const db = new Sequelize('postgres://localhost:5432/stock_portfolio_tdd_db', {
  logging: false
});


const seed = async() => {
  await db.sync({force: true});

  await User.bulkCreate(users);
  await Stock.bulkCreate(stocks);
  await Transaction.bulkCreate(transactions);
  await Portfolio.bulkCreate(portfolios);
  
  console.log(green('Seeding success!'));
  db.close();
}

module.exports = {
  seed
}