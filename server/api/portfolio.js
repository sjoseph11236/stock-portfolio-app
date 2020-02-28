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

router.post('/', async(req, res, next) => { 
  const [stock, wasCreated] = await Stock.findOrCreate({
    where: { 
      symbol: req.body.symbol,
      name: req.body.name
    }
  })

  if(!wasCreated){
    const updateStockInPortfolio = await Portfolio.findOne({
      where: { 
        stockId: stock.id,
        userId: req.user.id
      }
    })
    const total = updateStockInPortfolio.quantity + req.body.quantity;
    const incrementStock = await updateStockInPortfolio.update({ quantity: total });  
  }

  
});


module.exports = router; 