import * as types from './types.jsx';
import axios from 'axios';
import {reset} from 'redux-form'
import ciservers from '../config/ciservers'
import moment from 'moment'
import config from '../config'


export function fetchCIServers () {
  // console.log("CIServers " , ciservers)
  return function(dispatch) {
    dispatch({type: types.FETCH_CISERVERS_FULFILLED, payload: ciservers})
  }
}

export function ciserverLogin(auth) {
  return function(dispatch) {
    axios.post(`${config.ciRadiatorUrl}/api/auth/login`, {username: auth.username, password: auth.password, api: auth.api, team: auth.team})
      .then((response) => {
        if (response.data.type && response.data.value) {
          const payload = {
            "api": auth.api,
            "tokenType": response.data.type,
            "accessToken": response.data.value,
          }
          dispatch({type: types.LOGIN_CISERVER, payload: payload})
          closeCIServerLoginModal(auth)
          dispatch(reset('ciserverLogin'))
        } else {
            dispatch({type: types.LOGIN_CISERVER_REJECTED, payload: response.data})
        }

      })
      .catch((err) => {
        dispatch({type: types.LOGIN_PIPELINE_REJECTED, payload: err})
      })
  }
}


export function loadPipelines (ciserver) {
  return function(dispatch) {
    let pipelinePromises = [];
    dispatch({type: types.LOADING_PIPELINES})
      if (ciserver.auth) {
        let auth = localStorage.getItem(ciserver.api)
        auth = JSON.parse(auth);

        let request = {
          url: `${config.ciRadiatorUrl}/api/pipelines`,
          method: 'get',
          headers: {
            api: ciserver.api,
            authorization: `${auth.tokenType} ${auth.accessToken}`,
            team: ciserver.team
          }
        }
        pipelinePromises.push(axios(request))
      }


    Promise.all(pipelinePromises).then(responses => {
      let pipelines = [];
      responses.forEach(response => {
        response.data.forEach(pipeline => {
          pipelines.push(pipeline)
        })
      });
      dispatch({type: types.LOAD_PIPELINES_FULFILLED, payload: pipelines})
    }).catch(error => {
      console.log(error);
      dispatch({type: types.LOAD_PIPELINES_REJECTED, payload: error})
    });
  }
}





export function ciserverLogout(ciserver) {
  const payload = {
    "api": ciserver.api
  }
  localStorage.removeItem(ciserver.api);
  return function(dispatch) {
    dispatch({type: types.LOGOUT_CISERVER, payload: payload})
  }
}

export function openCIServerLoginModal(ciserver) {
  const payload = {
    "open": true,
    "api": ciserver.api
  }
  return function(dispatch) {
    dispatch({type: types.CISERVER_LOGIN_MODAL_OPEN_STATE, payload: payload})
  }
}

export function closeCIServerLoginModal(ciserver) {
  const payload = {
    "open": false,
    "api": ciserver.api
  }
  return function(dispatch) {
    dispatch({type: types.PIPELINE_LOGIN_MODAL_OPEN_STATE, payload: payload})
  }
}
