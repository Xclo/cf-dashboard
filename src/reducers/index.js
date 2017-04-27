import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import apps from './appsReducer'
import foundations from './foundationsReducer'
import appDetail from './appDetailReducer'

const rootReducer = combineReducers({
  apps,
  foundations,
  appDetail,
  form
});

export default rootReducer;
