import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import apps from './appsReducer';

const rootReducer = combineReducers({
  apps,
  form
});

export default rootReducer;
