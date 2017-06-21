import _ from 'lodash'

import * as types from '../actions/types';

export default function reducer(state = {
    all: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case types.FETCH_FOUNDATIONS: {
        return {...state, fetching: true}
      }
      case types.FETCH_FOUNDATIONS_REJECTED: {
        return {...state, fetching: false, error: action.payload}
      }
      case types.FETCH_FOUNDATIONS_FULFILLED: {
        let foundations = action.payload;
        foundations.forEach((foundation) => {
          foundation.selected = true;
          let auth = localStorage.getItem(foundation.api)
          if (auth) {
            foundation.auth = JSON.parse(auth);
          }
        })

        return {
          ...state,
          fetching: false,
          fetched: true,
          all: _.mapKeys(foundations, 'api')
        }
      }
      case types.LOGIN_FOUNDATION: {
        let foundations = {...state.all}
        let auth = action.payload;
        foundations[action.payload.api].auth = auth
        foundations[action.payload.api].loginModalOpen = false;
        localStorage.setItem(action.payload.api, JSON.stringify(auth));
        return {
          ...state,
          all: foundations
        }
      }
      case types.LOGOUT_FOUNDATION: {
        let foundations = {...state.all}
        foundations[action.payload.api].auth = undefined
        localStorage.removeItem(action.payload.api);
        return {
          ...state,
          all: foundations
        }
      }
      case types.FOUNDATION_LOGIN_MODAL_OPEN_STATE: {
        let foundations = {...state.all}
        foundations[action.payload.api].loginModalOpen = action.payload.open
        return {
          ...state,
          all: foundations
        }
      }

      case types.TOGGLE_FOUNDATION: {
        let foundations = {...state.all}
        let foundation = foundations[action.payload];
        foundation.selected = !foundation.selected
        return {
          ...state,
          all: foundations
        }
      }

      case types.DONE_REFRESHING_FOUNDATION_TOKEN: {
        let foundations = {...state.all}
        foundations[action.payload.api].refreshingToken = undefined
        return {
          ...state,
          all: foundations
        }
      }

      case types.REFRESHING_FOUNDATION_TOKEN: {
        let foundations = {...state.all}
        foundations[action.payload.api].refreshingToken = action.payload
        return {
          ...state,
          all: foundations
        }
      }

      case types.REFRESHED_FOUNDATION_TOKEN: {
        let foundations = {...state.all}
        let auth = action.payload;
        foundations[action.payload.api].auth = auth
        localStorage.setItem(action.payload.api, JSON.stringify(auth));
        return {
          ...state,
          all: foundations
        }
      }

      case types.LOAD_FOUNDATION_INFO: {
        return {
          ...state,
          selectedFoundation: action.payload
        }
      }
    }



    return state;
}
