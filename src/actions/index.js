import axios from 'axios';
import {reset} from 'redux-form'
import foundations from '../config/foundations'

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
  SELECT_APP
} from './types'


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

export function fetchApps (api) {
  let auth = localStorage.getItem(api)
  if (auth) {
    auth = JSON.parse(auth);
  } else {
    let payload = {
      api: api,
      message: 'Not Logged In'
    }
    return function(dispatch) {
      dispatch({type: FETCH_APPS_NOT_AUTHENTICATED, payload: payload})
    }
  }

  let request = {
    url: 'http://localhost:5000/api/apps',
    method: 'get',
    headers: {
      api: api,
      authorization: `${auth.tokenType} ${auth.accessToken}`
    }
  }

  return function(dispatch) {
    axios(request)
      .then((response) => {
        dispatch({type: FETCH_APPS_FULFILLED, payload: response.data})
      })
      .catch((err) => {
        if (err.response) {
          dispatch({type: FETCH_APPS_REJECTED, payload: err.response.data})
          if (err.response.status === 401) {
            foundationRefreshToken().then(() => {
              console.log('token refreshed?')
            })
          }
        } else {
          //more generic
          let payload = {
            api: api,
            message: 'Error fetching apps'
          }
          dispatch({type: FETCH_APPS_REJECTED, payload: payload})
        }

      })
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
            "expiresIn": response.data.expires_in
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

export function foundationRefreshToken(auth) {
  return function(dispatch) {
    return axios.post('http://localhost:5000/api/auth/refreshToken', {refresh_token: auth.refreshToken, api: auth.api})
      .then((response) => {
        if (response.data.token_type && response.data.access_token && response.data.refresh_token) {
          const payload = {
            "api": auth.api,
            "tokenType": response.data.token_type,
            "accessToken": response.data.access_token,
            "refreshToken": response.data.refresh_token,
            "expiresIn": response.data.expires_in
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
