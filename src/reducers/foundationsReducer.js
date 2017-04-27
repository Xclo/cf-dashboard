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
        return {
          ...state,
          fetching: false,
          fetched: true,
          all: _.mapKeys(action.payload, 'api')
        }
      }
      case LOGIN_FOUNDATION: {
        var foundations = {...state.all}
        foundations[action.payload.api].auth = _.omit(action.payload, 'api')
        return {
          ...state,
          all: foundations
        }
      }
      case LOGOUT_FOUNDATION: {
        var foundations = {...state.all}
        foundations[action.payload.api].auth = undefined

        return {
          ...state,
          all: foundations
        }
      }
    }

    return state
}
