import axios from 'axios';
import {reset} from 'redux-form'

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
  SELECT_APPLIST
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
export function fetchApps () {
  return function(dispatch) {
    axios.get('http://localhost:5000/api/stub/apps')
      .then((response) => {
        dispatch({type: FETCH_APPS_FULFILLED, payload: response.data})
      })
      .catch((err) => {
        dispatch({type: FETCH_APPS_REJECTED, payload: err})
      })
  }
}

export function fetchFoundations () {
  return function(dispatch) {
    axios.get('http://localhost:5000/api/foundations')
      .then((response) => {
        dispatch({type: FETCH_FOUNDATIONS_FULFILLED, payload: response.data})
      })
      .catch((err) => {
        dispatch({type: FETCH_FOUNDATIONS_REJECTED, payload: err})
      })
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
