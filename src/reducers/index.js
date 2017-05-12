import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import apps from './appsReducer'
import foundations from './foundationsReducer'
import appDetail from './appDetailReducer'
import filters from './filtersReducer'
import msg from './msgReducer'

const rootReducer = combineReducers({
  apps,
  foundations,
  appDetail,
  form,
  filters,
  msg
});

export default rootReducer;
