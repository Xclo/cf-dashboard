import * as types from './types.jsx';
import axios from 'axios';
import {reset} from 'redux-form'
import foundations from '../config/foundations'
import moment from 'moment'


export function fetchFoundations () {
  return function(dispatch) {
    dispatch({type: types.FETCH_FOUNDATIONS_FULFILLED, meta: {remote: true}, payload: foundations})
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
          dispatch({type: types.LOGIN_FOUNDATION, meta: {remote: true}, payload: payload})
          closeFoundationLoginModal(auth)
          dispatch(reset('foundationLogin'))
        } else {
            dispatch({type: types.LOGIN_FOUNDATION_REJECTED, meta: {remote: true}, payload: response.data})
        }

      })
      .catch((err) => {
        dispatch({type: types.LOGIN_FOUNDATION_REJECTED, meta: {remote: true}, payload: err})
      })
  }
}

export function foundationLogout(foundation) {
  const payload = {
    "api": foundation.api
  }
  localStorage.removeItem(foundation.api);
  return function(dispatch) {
    dispatch({type: types.LOGOUT_FOUNDATION, meta: {remote: true}, payload: payload})
  }
}

export function openFoundationLoginModal(foundation) {
  const payload = {
    "open": true,
    "api": foundation.api
  }
  return function(dispatch) {
    dispatch({type: types.FOUNDATION_LOGIN_MODAL_OPEN_STATE, payload: payload})
  }
}

export function closeFoundationLoginModal(foundation) {
  const payload = {
    "open": false,
    "api": foundation.api
  }
  return function(dispatch) {
    dispatch({type: types.FOUNDATION_LOGIN_MODAL_OPEN_STATE, payload: payload})
  }
}