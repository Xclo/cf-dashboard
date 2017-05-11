import axios from 'axios';
import {reset} from 'redux-form'
import foundations from '../config/foundations'
import moment from 'moment'

import {
  FETCH_APPS_FULFILLED,
  FETCH_APPS_REJECTED,
  FETCH_FOUNDATIONS_FULFILLED,
  FETCH_FOUNDATIONS_REJECTED,
  FETCH_APP_DETAILS_FULFILLED,
  FETCH_APP_DETAILS_REJECTED,
  LOGIN_FOUNDATION,
  LOGIN_FOUNDATION_REJECTED,
  LOGOUT_FOUNDATION,
  FOUNDATION_LOGIN_MODAL_OPEN_STATE,
  SELECT_APPLIST,
  TOGGLE_FOUNDATION,
  SEARCH_FIELD_UPDATED,
  FETCH_APPS_NOT_AUTHENTICATED,
  SELECT_APP,
  SEND,
  SEND_SUCCESS,
  SEND_FAIL,
  FETCHING_APPS,
  TOGGLE_BUILDPACK,
  TOGGLE_APP_STATE
} from './types'


export function send(id, content) {
  const message = { id, content };
  return {
    type: 'socket',
    types: [SEND, SEND_SUCCESS, SEND_FAIL],
    promise: (socket) => socket.emit('SendMessage', message),
  }
}


export function selectAppList (foundation) {
  return {
    type: SELECT_APPLIST,
    foundation
  }
}


export function fetchAppsIfNeeded(foundation) {
  return dispatch(fetchApps(subreddit));
}

export function selectApp(app) {
  return function(dispatch) {
    dispatch({type: SELECT_APP, payload: app})
  }
}

export function fetchApps (foundations) {
  return function(dispatch) {
    let foundationPromises = [];
    dispatch({type: FETCHING_APPS})

    _.values(foundations).forEach(foundation => {
      if (foundation.auth) {
        let auth = localStorage.getItem(foundation.api)
        auth = JSON.parse(auth);

        let request = {
          url: 'http://localhost:5000/api/apps',
          method: 'get',
          headers: {
            api: foundation.api,
            authorization: `${auth.tokenType} ${auth.accessToken}`
          }
        }
        foundationPromises.push(axios(request))
      }
    });


    Promise.all(foundationPromises).then(responses => {
      let apps = [];
      responses.forEach(response => {
        response.data.forEach(app => {
          if (app.buildpack === null) {
            app.buildpack = 'No Buildpack';
          }
          app.state = app.state.charAt(0).toUpperCase() + app.state.slice(1).toLowerCase(); //format the state of the app
          apps.push(app)
        })
      });
      dispatch({type: FETCH_APPS_FULFILLED, payload: apps})
    }).catch(error => {
      console.log(error);
      dispatch({type: FETCH_APPS_REJECTED, payload: error})
    });
  }
}

export function fetchFoundations () {
  return function(dispatch) {
    dispatch({type: FETCH_FOUNDATIONS_FULFILLED, payload: foundations})
  }
}

export function toggleFoundation (api) {
  return function(dispatch) {
    dispatch({type: TOGGLE_FOUNDATION, payload: api});
  }
}

export function toggleBuildpack (buildpack) {
  return function(dispatch) {
    dispatch({type: TOGGLE_BUILDPACK, payload: buildpack});
  }
}

export function toggleAppState (state) {
  return function(dispatch) {
    dispatch({type: TOGGLE_APP_STATE, payload: state});
  }
}

export function fetchAppDetail () {
  return function(dispatch) {
    axios.get('http://localhost:5000/api/stub/app/1')
      .then((response) => {
        dispatch({type: FETCH_APP_DETAILS_FULFILLED, payload: response.data})
      })
      .catch((err) => {
        dispatch({type: FETCH_APP_DETAILS_REJECTED, payload: err})
      })
  }
}

export function foundationLogin(auth) {
  return function(dispatch) {
    axios.post('http://localhost:5000/api/auth/login', {username: auth.username, password: auth.password, api: auth.api})
      .then((response) => {
        if (response.data.token_type && response.data.access_token && response.data.refresh_token) {
          const payload = {
            "api": auth.api,
            "tokenType": response.data.token_type,
            "accessToken": response.data.access_token,
            "refreshToken": response.data.refresh_token,
            "expires": moment().add(response.data.expires_in, 'seconds').toISOString()
          }
          dispatch({type: LOGIN_FOUNDATION, payload: payload})
          closeFoundationLoginModal(auth)
          dispatch(reset('foundationLogin'))
        } else {
            dispatch({type: LOGIN_FOUNDATION_REJECTED, payload: response.data})
        }

      })
      .catch((err) => {
        dispatch({type: LOGIN_FOUNDATION_REJECTED, payload: err})
      })
  }
}

export function foundationLogout(foundation) {
  const payload = {
    "api": foundation.api
  }
  localStorage.removeItem(foundation.api);
  return function(dispatch) {
    dispatch({type: LOGOUT_FOUNDATION, payload: payload})
  }
}

export function openFoundationLoginModal(foundation) {
  const payload = {
    "open": true,
    "api": foundation.api
  }
  return function(dispatch) {
    dispatch({type: FOUNDATION_LOGIN_MODAL_OPEN_STATE, payload: payload})
  }
}

export function closeFoundationLoginModal(foundation) {
  const payload = {
    "open": false,
    "api": foundation.api
  }
  return function(dispatch) {
    dispatch({type: FOUNDATION_LOGIN_MODAL_OPEN_STATE, payload: payload})
  }
}

export function searchFieldUpdated(search) {
  return function(dispatch) {
    dispatch({type: SEARCH_FIELD_UPDATED, payload: search})
  }
}
