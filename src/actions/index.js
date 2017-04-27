import axios from 'axios';

import {
  FETCH_APPS_FULFILLED,
  FETCH_APPS_REJECTED,
  FETCH_FOUNDATIONS_FULFILLED,
  FETCH_FOUNDATIONS_REJECTED,
  FETCH_APP_DETAILS_FULFILLED,
  FETCH_APP_DETAILS_REJECTED,
  LOGIN_FOUNDATION,
  LOGOUT_FOUNDATION
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

export function foundationLogin() {
  const payload = {
    "api": "https://api.run.pcf.cloud",
    "type": "bearer",
    "token": "abcd123"
  }
  return function(dispatch) {
    dispatch({type: LOGIN_FOUNDATION, payload: payload})
  }
}

export function foundationLogout() {
  const payload = {
    "api": "https://api.run.pcf.cloud"
  }
  return function(dispatch) {
    dispatch({type: LOGOUT_FOUNDATION, payload: payload})
  }
}
