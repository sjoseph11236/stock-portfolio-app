import axios from 'axios';

/**
 * ACTION TYPES
 */
const GOT_PORTFOLIO = 'GOT_PORTFOLIO';
const UPDATE_TOTAL = 'UPDATE_TOTAL';
/**
 * INITIAL STATE
 */

const initialState  = { 
  portfolioTotal: 0,
  stocks: [],
};

/**
 * ACTION CREATORS
 */

const gotPortfolio = stocks => { 
  return { 
    type: GOT_PORTFOLIO,
    stocks
  }
};

const updatePortfolioTotal = portfolioTotal => { 
  return { 
    type: UPDATE_TOTAL,
    portfolioTotal
  }
}


/**
 * THUNK CREATORS
 */

export const getPortfolioThunk = userId => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/portfolio/${userId}`);
      const symbols = data.symbols;
      const stocks = data.stocks;
      dispatch(getPortfolioStockData(symbols,stocks));
    } catch (error) {
      console.error(error);
    }
  } 
};


export const getPortfolioStockData = (symbols, stocks) => {
  return async dispatch => { 
    try {
      const { data } = await axios.get(`/api/iex/stock/${symbols}`);   
      let portfolioTotal = 0;
      data.map((stock, idx ) => {
        if(stocks[idx].symbol === stock.symbol){
          stock.quantity = stocks[idx].quantity;
          portfolioTotal += ((stock.latestPrice * 100) * stocks[idx].quantity);
        }
      });
      dispatch(gotPortfolio(data));   
      dispatch(updatePortfolioTotal(portfolioTotal));
    } catch (error) {
      console.error(error);
    }
  }
};


const portfolio = (state = initialState, action) => {
  switch(action.type) { 
    case GOT_PORTFOLIO: 
      return { ...state, stocks: action.stocks };
    case UPDATE_TOTAL: 
      return { ...state, portfolioTotal: action.portfolioTotal };
    default: 
      return state;
  }
}

export default portfolio;