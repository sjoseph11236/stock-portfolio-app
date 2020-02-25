import { createStore, applyMiddleware, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import user from './reducers/user';
import chart from './reducers/chart';

const reducer = combineReducers({ 
  chart,
  user,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed:true }))
)
const store = createStore(reducer, middleware)

export * from './reducers/user';
export default store;
