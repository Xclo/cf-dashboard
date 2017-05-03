import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import reducers from './reducers';
import store from "./middleware/store"
import 'bootstrap/dist/css/bootstrap.css';

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

require('../style/style.scss')
const app = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, app
);
