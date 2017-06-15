import _ from 'lodash'

import * as types from '../actions/types.jsx';

export default function reducer(state = {
    all: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case types.LOAD_PIPELINES: {
        return {...state, fetching: true}
      }
      case types.LOAD_PIPELINES_REJECTED: {
        return {...state, fetching: false, error: action.payload}
      }
      case types.LOAD_PIPELINES_FULFILLED: {
        let pipelines = action.payload;
        return {
          ...state,
          fetching: false,
          fetched: true,
          all: _.mapKeys(pipelines, 'api')
        }
      }
    }

    return state;
}
