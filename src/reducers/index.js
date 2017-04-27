import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import apps from './appsReducer'
import foundations from './foundationsReducer'

const rootReducer = combineReducers({
  apps,
  foundations,
  form
});

export default rootReducer;
