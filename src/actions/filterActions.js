import * as types from './types.jsx';

export function toggleFoundation (api) {
  return function(dispatch) {
    dispatch({type: types.TOGGLE_FOUNDATION, meta: {remote: true}, payload: api});
  }
}

export function toggleBuildpack (buildpack) {
  return function(dispatch) {
    dispatch({type: types.TOGGLE_BUILDPACK, payload: buildpack});
  }
}

export function toggleAppState (state) {
  return function(dispatch) {
    dispatch({type: types.TOGGLE_APP_STATE, payload: state});
  }
}
