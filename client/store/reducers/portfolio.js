import axios from 'axios';

/**
 * ACTION TYPES
 */
const GOT_PORTFOLIO = 'GOT_PORTFOLIO';

/**
 * INITIAL STATE
 */

const initialState  = { 
  stocks: [],
}

/**
 * ACTION CREATORS
 */

const gotPortfolio = stocks => { 
  return { 
    type: GOT_PORTFOLIO,
    stocks
  }
}


/**
 * THUNK CREATORS
 */

export const getPortfolioThunk = userId => {
  return async dispatch => {
    let symbols;
    let stocks; 
    try {
      const { data } = await axios.get(`/api/portfolio/${userId}`);
      symbols = data.symbols;
      stocks = data.stocks;
    } catch (error) {
      console.error(error);
    }

    try {
      const { data } = await axios.get(`/api/iex/stock/${symbols}`);   
      data.map((stock, idx ) => {
        if(stocks[idx].symbol === stock.symbol){
          stock.quantity = stocks[idx].quantity
        }
      });
      dispatch(gotPortfolio(data));   
    } catch (error) {
      console.error(error);
    }
  } 
}

const portfolio = (state = initialState, action) => {
  switch(action.type) { 
    case GOT_PORTFOLIO: 
      return { ...state, stocks: action.stocks };
    default: 
      return state;
  }
}

export default portfolio;