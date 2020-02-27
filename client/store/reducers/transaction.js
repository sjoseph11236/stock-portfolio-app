import axios from 'axios';

/**
 * ACTION TYPES
 */
const GOT_TRANSACTIONS = 'GOT_TRANSACTIONS';
const GOT_PURCHASE = 'GOT_PURCHASE';

/**
 * INITIAL STATE
 */

const initialState  = { 
  transactions : [],
  purchase: {}
}

/**
 * ACTION CREATORS
 */

const gotTransactions = transactions => { 
  return { 
    type: GOT_TRANSACTIONS,
    transactions
  }
}

const gotPurchase = purchase => { 
  return { 
    type: GOT_PURCHASE,
    purchase
  }
}

/**
 * THUNK CREATORS
 */

export const getPurchaseTickerDataThunk = symbols => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/iex/stock/${symbols}`);
      dispatch(gotPurchase(data[0]));
    } catch (error) {
      console.error(error);
    }
  };
}

export const getTransactionsThunk = userId => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/transactions/${userId}`)
      dispatch(gotTransactions(data));
    } catch (error) {
      console.error(error);
    }
  } 
}

const transaction = (state = initialState, action) => {
  switch(action.type) { 
    case GOT_TRANSACTIONS: 
      return { ...state, transactions: action.transactions };
    case GOT_PURCHASE: 
      return { ...state, purchase: action.purchase };
    default: 
      return state;
  }
}

export default transaction;