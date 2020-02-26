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
    try {
      const { data } = await axios.get(`/api/portfolio/${userId}`)
      console.log("TCL: data", data);
      // dispatch(gotPortfolio(data));
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