const router = require('express').Router();
const { Portfolio, Stock } = require('../db');

router.get('/:userId', async (req, res, next) => { 
  try {
    const portfolio = await Portfolio.findAll({
      where: { 
        userId: req.params.userId
      },
    });

    if(portfolio.length) {
      const portfolioStocks = await Portfolio.getPortfolioStocks(portfolio);
      res.send(portfolioStocks);  
    }
    else { 
      res.status(404).send('No portfolio found');      
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});


module.exports = router; 