const Sequelize = require('sequelize');
const db = require('../db');
const Stock  = require('./stock');

const Portfolio = db.define('portfolio', { 
  quantity: { 
    type: Sequelize.INTEGER, 
    allowNull: false,
    defaultValue: 1, 
    validate: { 
      min: 1
    }
  }
});



Portfolio.getPortfolioStocks = async (portfolio) => { 
  
  const portfolioStocks = [];

  for(let i = 0; i < portfolio.length; i++) { 
    const item = portfolio[i];
    
    const stock = await Stock.findByPk(item.stockId);
    portfolioStocks.push({ 
      stockId: item.stockId, 
      symbol:stock.symbol, 
      name: stock.name, 
      quantity: item.quantity
    });
  }

  return portfolioStocks;
};

module.exports = Portfolio;