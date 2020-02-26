import { createStore, applyMiddleware, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import user from './reducers/user';
import chart from './reducers/chart';
import transaction from './reducers/transaction';

const reducer = combineReducers({ 
  chart,
  user,
  transaction
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed:true }))
)
const store = createStore(reducer, middleware)

export * from './reducers/user';
export default store;
