import axios from "axios";

// ACTION TYPES


// ACTION CREATORS 


// THUNKS 
export const test = () => {
  return async dispatch => {
    try {
      console.log('heree in test thunk');
    } catch (error) {
      console.log('This error is comming from getAnnotationsThunk ', error);
    }
  }
}

const initialState = { 
  stocks: []
}

// REDUCER
const stock = (state = initialState, action) => {
  console.log('stocks are here >>>>>')
  switch(action.type) {
    default:
      return state; 
  }
}

export default stock;