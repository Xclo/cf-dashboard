import * as types from './types.jsx';
import axios from 'axios';
import {reset} from 'redux-form'
import foundations from '../config/foundations'
import moment from 'moment'
import config from '../config'

export function fetchFoundations () {
  return function(dispatch) {
    dispatch({type: types.FETCH_FOUNDATIONS_FULFILLED, payload: foundations})
  }
}


export function foundationLogin(auth) {
  return function(dispatch) {
    axios.post(`${config.cfRadiatorUrl}/api/auth/login`, {username: auth.username, password: auth.password, api: auth.api})
      .then((response) => {
        if (response.data.token_type && response.data.access_token && response.data.refresh_token) {
          const payload = {
            "api": auth.api,
            "tokenType": response.data.token_type,
            "accessToken": response.data.access_token,
            "refreshToken": response.data.refresh_token,
            "expires": moment().add(response.data.expires_in, 'seconds').toISOString()
          }
          dispatch({type: types.LOGIN_FOUNDATION, payload: payload})
          closeFoundationLoginModal(auth)
          dispatch(reset('foundationLogin'))
        } else {
            dispatch({type: types.LOGIN_FOUNDATION_REJECTED, payload: response.data})
        }

      })
      .catch((err) => {
        dispatch({type: types.LOGIN_FOUNDATION_REJECTED, payload: err})
      })
  }
}

export function foundationLogout(foundation) {
  const payload = {
    "api": foundation.api
  }
  localStorage.removeItem(foundation.api);
  return function(dispatch) {
    dispatch({type: types.LOGOUT_FOUNDATION, payload: payload})
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

export function loadFoundationInfo(foundation) {
  let infoUrl = `${foundation.api}/v2/info`

  return dispatch => {
    let request = {
      url: `${config.cfRadiatorUrl}/api/foundationInfo`,
      method: 'get',
      headers: {
        api: foundation.api
      }
    }
    axios(request).then((response) => {
      dispatch({type: types.LOAD_FOUNDATION_INFO, payload: {api: foundation.api, info: response.data}});
    })
  }
}
