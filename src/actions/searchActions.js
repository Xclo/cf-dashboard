import * as types from './types.jsx';

export function searchFieldUpdated(search) {
  return function(dispatch) {
    dispatch({type: types.SEARCH_FIELD_UPDATED, payload: search})
  }
}
