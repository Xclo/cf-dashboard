import axios from 'axios';

import {
  FETCH_APPS_FULFILLED,
  FETCH_APPS_REJECTED,
  FETCH_FOUNDATIONS_FULFILLED,
  FETCH_FOUNDATIONS_REJECTED,
  FETCH_APP_DETAILS_FULFILLED,
  FETCH_APP_DETAILS_REJECTED,
  LOGIN_FOUNDATION,
  LOGOUT_FOUNDATION,
  FOUNDATION_LOGIN_MODAL_OPEN_STATE
} from './types'

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
    axios.get('http://localhost:5000/api/stub/foundations')
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
  axios.get('http://localhost:5000/auth/login', {username: auth.username, password: auth.password, api: auth.api})
    .then((response) => {
      dispatch({type: FETCH_FOUNDATIONS_FULFILLED, payload: response.data})
      closeFoundationLoginModal(auth)
    })
    .catch((err) => {
      dispatch({type: FETCH_FOUNDATIONS_REJECTED, payload: err})
    })
  // console.log(foundation);
  const payload = {
    "api": auth.api,
    "type": "bearer",
    "token": "abcd123"
  }
  return function(dispatch) {
    dispatch({type: LOGIN_FOUNDATION, payload: payload})
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
