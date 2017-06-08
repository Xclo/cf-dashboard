import _ from 'lodash'

import * as types from '../actions/types.jsx';

export default function reducer(state = {
    all: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case types.FETCH_PIPELINES: {
        return {...state, fetching: true}
      }
      case types.FETCH_PIPELINES_REJECTED: {
        return {...state, fetching: false, error: action.payload}
      }
      case types.FETCH_PIPELINES_FULFILLED: {
        let pipelines = action.payload;
        pipelines.forEach((pipeline) => {
          pipelines.selected = true;
          let auth = localStorage.getItem(pipeline.api)
          if (auth) {
            pipeline.auth = JSON.parse(auth);
          }
        })

        return {
          ...state,
          fetching: false,
          fetched: true,
          all: _.mapKeys(pipelines, 'api')
        }
      }
      case types.LOGIN_PIPELINE: {
        let pipelines = {...state.all}
        let auth = action.payload;
        pipelines[action.payload.api].auth = auth
        pipelines[action.payload.api].loginModalOpen = false;
        localStorage.setItem(action.payload.api, JSON.stringify(auth));
        return {
          ...state,
          all: pipelines
        }
      }
      case types.LOGOUT_PIPELINE: {
        let pipelines = {...state.all}
        pipelines[action.payload.api].auth = undefined
        localStorage.removeItem(action.payload.api);
        return {
          ...state,
          all: pipelines
        }
      }
      case types.PIPELINE_LOGIN_MODAL_OPEN_STATE: {
        let pipelines = {...state.all}
        pipelines[action.payload.api].loginModalOpen = action.payload.open
        return {
          ...state,
          all: pipelines
        }
      }

      case types.TOGGLE_PIPELINE: {
        let pipelines = {...state.all}
        let pipeline = pipelines[action.payload];
        pipeline.selected = !pipeline.selected
        return {
          ...state,
          all: pipelines
        }
      }

      case types.DONE_REFRESHING_PIPELINE_TOKEN: {
        let pipelines = {...state.all}
        pipelines[action.payload.api].refreshingToken = undefined
        return {
          ...state,
          all: pipelines
        }
      }

      case types.REFRESHING_PIPELINE_TOKEN: {
        let pipelines = {...state.all}
        pipelines[action.payload.api].refreshingToken = action.payload
        return {
          ...state,
          all: pipelines
        }
      }

      case types.REFRESHED_PIPELINE_TOKEN: {
        let pipelines = {...state.all}
        let auth = action.payload;
        pipelines[action.payload.api].auth = auth
        localStorage.setItem(action.payload.api, JSON.stringify(auth));
        return {
          ...state,
          all: pipelines
        }
      }
    }



    return state;
}
