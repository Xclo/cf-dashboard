import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);


import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();
require('pui-css-bootstrap')
require('pui-css-grids')
require('pui-css-lists')
require('pui-css-panels')
require('pui-css-tile-layout')
require('pui-css-typography')
require('../style/style.scss')

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App/>
  </Provider>
  , document.querySelector('.container'));
