const router = require('express').Router();
const { Transaction, Stock  }  = require('../db');

router.get('/:userId', async (req, res, next ) => {
  try {
    const transactions = await Transaction.findAll({
      where: {
        id: req.params.userId
      }, 
      include: [{model: Stock}]
    })
  
    res.send(transactions);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;