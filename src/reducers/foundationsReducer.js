import _ from 'lodash'

import {
  FETCH_FOUNDATIONS,
  FETCH_FOUNDATIONS_REJECTED,
  FETCH_FOUNDATIONS_FULFILLED,
  LOGIN_FOUNDATION,
  LOGOUT_FOUNDATION
} from '../actions/types'

export default function reducer(state = {
    all: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case FETCH_FOUNDATIONS: {
        return {...state, fetching: true}
      }
      case FETCH_FOUNDATIONS_REJECTED: {
        return {...state, fetching: false, error: action.payload}
      }
      case FETCH_FOUNDATIONS_FULFILLED: {
        var foundations = action.payload;
        foundations.forEach((foundation) => {
          let auth = localStorage.getItem(foundation.api)
          if (auth) {
            foundation.auth = auth;
          }
        })

        return {
          ...state,
          fetching: false,
          fetched: true,
          all: _.mapKeys(foundations, 'api')
        }
      }
      case LOGIN_FOUNDATION: {
        let foundations = {...state.all}
        let auth = _.omit(action.payload, 'api');
        foundations[action.payload.api].auth = auth
        localStorage.setItem(action.payload.api, auth);
        return {
          ...state,
          all: foundations
        }
      }
      case LOGOUT_FOUNDATION: {
        var foundations = {...state.all}
        foundations[action.payload.api].auth = undefined
        localStorage.removeItem(action.payload.api);
        return {
          ...state,
          all: foundations
        }
      }
    }

    return state
}
