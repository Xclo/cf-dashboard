import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import apps from './appsReducer'
import foundations from './foundationsReducer'
import appDetail from './appDetailReducer'
import filters from './filtersReducer'

const rootReducer = combineReducers({
  apps,
  foundations,
  appDetail,
  form,
  filters
});

export default rootReducer;
