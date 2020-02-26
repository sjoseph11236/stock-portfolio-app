import axios from 'axios';

/**
 * ACTION TYPES
 */
const GOT_TRANSACTIONS = 'GOT_TRANSACTIONS';

/**
 * INITIAL STATE
 */

const initialState  = { 
  transactions : [],
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

/**
 * THUNK CREATORS
 */

export const getTransactionsThunk = userId => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/transactions/${userId}`)
      console.log("TCL: data", data);
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
    default: 
      return state;
  }
}

export default transaction;