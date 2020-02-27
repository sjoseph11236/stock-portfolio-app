import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';
const PURCHASE = 'PURCHASE';


/**
 * INITIAL STATE
 */
const defaultUser = {};

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user});
const removeUser = () => ({type: REMOVE_USER});
const purchase = amount =>({type: PURCHASE, amount});
/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
};

export const auth = (name, email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, { name, email, password });
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))

  } catch (error) {
    console.error(error)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
  } catch (err) {
    console.error(err)
  }
}

export const purchaseThunk = amount => async dispatch => {
console.log("TCL: amount ", amount )
  try {
    dispatch(purchase(amount));
  } catch (err) {
    console.error(err);
  }
}

const user = (state = defaultUser, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    case PURCHASE:
      return {...state, cash: state.cash - action.amount }; 
    default:
      return state;
  }
}

export default user;