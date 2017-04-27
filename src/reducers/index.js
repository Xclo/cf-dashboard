import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import apps from './appsReducer';
import appDetail from './appDetailReducer'

const rootReducer = combineReducers({
  apps,
  appDetail,
  form
});

export default rootReducer;
