const router = require('express').Router();
const axios = require('axios');
const API_TOKEN = require('../../secret');







router.get('/stock/:symbols', async (req, res, next) => { 
  try {
    const symbols = req.params.symbols;
    const queryStr = `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=quote,chart&range=1m&last=5&token=${API_TOKEN}`;
    const { data  } = await axios.get(queryStr);
    res.json(data);
  } catch (error) {
    next(error);
  }


});

module.exports = router;