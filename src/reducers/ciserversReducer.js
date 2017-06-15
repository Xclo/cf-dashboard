import _ from 'lodash'

import * as types from '../actions/types.jsx';

export default function reducer(state = {
    all: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case types.FETCH_CISERVERS: {
        return {...state, fetching: true}
      }
      case types.FETCH_CISERVERS_REJECTED: {
        return {...state, fetching: false, error: action.payload}
      }
      case types.FETCH_CISERVERS_FULFILLED: {
        let ciservers = action.payload;
        ciservers.forEach((ciserver) => {
          let auth = localStorage.getItem(ciserver.api)
          if (auth) {
            ciserver.auth = JSON.parse(auth);
          }
        })

        return {
          ...state,
          fetching: false,
          fetched: true,
          all: _.mapKeys(ciservers, 'api')
        }
      }
      case types.LOGIN_CISERVER: {
        let ciservers = {...state.all}
        let auth = action.payload;
        ciservers[action.payload.api].auth = auth
        ciservers[action.payload.api].loginModalOpen = false;
        localStorage.setItem(action.payload.api, JSON.stringify(auth));
        return {
          ...state,
          all: ciservers
        }
      }
      case types.LOGOUT_CISERVER: {
        let ciservers = {...state.all}
        ciservers[action.payload.api].auth = undefined
        localStorage.removeItem(action.payload.api);
        return {
          ...state,
          all: ciservers
        }
      }
      case types.CISERVER_LOGIN_MODAL_OPEN_STATE: {
        let ciservers = {...state.all}
        ciservers[action.payload.api].loginModalOpen = action.payload.open
        return {
          ...state,
          all: ciservers
        }
      }

      case types.TOGGLE_CISERVER: {
        let ciservers = {...state.all}
        let ciserver = ciservers[action.payload];
        ciserver.selected = !ciserver.selected
        return {
          ...state,
          all: ciservers
        }
      }

      case types.DONE_REFRESHING_CISERVER_TOKEN: {
        let ciservers = {...state.all}
        ciservers[action.payload.api].refreshingToken = undefined
        return {
          ...state,
          all: ciservers
        }
      }

      case types.REFRESHING_CISERVER_TOKEN: {
        let ciservers = {...state.all}
        ciservers[action.payload.api].refreshingToken = action.payload
        return {
          ...state,
          all: ciservers
        }
      }

      case types.REFRESHED_CISERVER_TOKEN: {
        let ciservers = {...state.all}
        let auth = action.payload;
        ciservers[action.payload.api].auth = auth
        localStorage.setItem(action.payload.api, JSON.stringify(auth));
        return {
          ...state,
          all: ciservers
        }
      }
    }



    return state;
}
