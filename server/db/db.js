const Sequelize = require('sequelize');
const chalk = require('chalk');

console.log(chalk.yellow('Opening database connection'));

const database = 'stock_portfolio';
const db = new Sequelize(`postgres://localhost:5432/${database}`, {
  logging: false
});

module.exports = db;
