const router = require('express').Router();
const { Transaction, Stock  }  = require('../db');

router.get('/:userId', async (req, res, next ) => {
  try {
    const transactions = await Transaction.findAll({
      where: {
        userId: req.params.userId
      }, 
      include: [{ model: Stock }]
    })
    
    if(transactions.length) {
      res.send(transactions);
    }
    else { 
      res.status(404).send('No transactions found for this user');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;