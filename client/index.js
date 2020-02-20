import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './app';
import { HashRouter as Router }  from 'react-router-dom';


ReactDOM.render(
  <Provider store={store}>
    <Router >
      <App /> 
    </Router>
  </Provider>,
  document.getElementById('app'));