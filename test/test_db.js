const Sequelize = require('sequelize');
const { Op } = Sequelize;
const { User, Stock, Transaction, Portfolio } = require('../server/db');
const users = require('../bin/data/user.json');
const stocks = require('../bin/data/stock.json');
const transactions = require('../bin/data/transaction.json');
const portfolios = require('../bin/data/portfolio.json');
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