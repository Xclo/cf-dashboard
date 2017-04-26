import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import reducers from './reducers';
import store from "./middleware/store"


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

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, app);
