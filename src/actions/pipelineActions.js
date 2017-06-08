import * as types from './types.jsx';
import axios from 'axios';
import {reset} from 'redux-form'
import pipelines from '../config/pipelines'
import moment from 'moment'


export function fetchPipelines () {
  console.log("Pipelines " + pipelines)
  return function(dispatch) {
    dispatch({type: types.FETCH_PIPELINES_FULFILLED, meta: {remote: true}, payload: pipelines})
  }
}

export function pipelineLogin(auth) {
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
          dispatch({type: types.LOGIN_PIPELINE, meta: {remote: true}, payload: payload})
          closePipelineLoginModal(auth)
          dispatch(reset('pipelineLogin'))
        } else {
            dispatch({type: types.LOGIN_PIPELINE_REJECTED, meta: {remote: true}, payload: response.data})
        }

      })
      .catch((err) => {
        dispatch({type: types.LOGIN_PIPELINE_REJECTED, meta: {remote: true}, payload: err})
      })
  }
}

export function pipelineLogout(pipeline) {
  const payload = {
    "api": pipeline.api
  }
  localStorage.removeItem(pipeline.api);
  return function(dispatch) {
    dispatch({type: types.LOGOUT_PIPELINE, meta: {remote: true}, payload: payload})
  }
}

export function openPipelineLoginModal(pipeline) {
  const payload = {
    "open": true,
    "api": pipeline.api
  }
  return function(dispatch) {
    dispatch({type: types.PIPELINE_LOGIN_MODAL_OPEN_STATE, payload: payload})
  }
}

export function closePipelineLoginModal(pipeline) {
  const payload = {
    "open": false,
    "api": pipeline.api
  }
  return function(dispatch) {
    dispatch({type: types.PIPELINE_LOGIN_MODAL_OPEN_STATE, payload: payload})
  }
}
