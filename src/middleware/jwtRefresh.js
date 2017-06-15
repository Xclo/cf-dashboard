import moment from 'moment'
import axios from 'axios';

import {
  DONE_REFRESHING_FOUNDATION_TOKEN,
  REFRESHING_FOUNDATION_TOKEN,
  REFRESHED_FOUNDATION_TOKEN
} from '../actions/types'


export default function jwt({ dispatch, getState }) {
  return (next) => (action) => {
      if (typeof action === 'function') {
        _.map(getState().foundations.all, (foundation) => {
          if (!foundation.auth) return;
          if (moment().add(5, 'minutes').isAfter(moment(foundation.auth.expires))) {
            if (!foundation.auth.refreshingToken) {
              return foundationRefreshToken(dispatch, foundation.auth).then(() => next(action));
            } else {
              return foundation.auth.then(() => next(action));
            }
          }
        });
      }
      return next(action);
    };
}

function foundationRefreshToken(dispatch, auth) {
  let refreshPromise = axios.post('https://cf-radiator-dashboard.apps.pcf.cloud/api/auth/refreshToken', {refresh_token: auth.refreshToken, api: auth.api})
    .then((response) => {
      dispatch({type: DONE_REFRESHING_FOUNDATION_TOKEN, payload: {api: auth.api}})
      if (response.data.token_type && response.data.access_token && response.data.refresh_token) {
        const payload = {
          "api": auth.api,
          "tokenType": response.data.token_type,
          "accessToken": response.data.access_token,
          "refreshToken": response.data.refresh_token,
          "expires": moment().add(response.data.expires_in, 'seconds').toISOString()
        }

        dispatch({type: REFRESHED_FOUNDATION_TOKEN, payload: payload})
        return Promise.resolve(payload)
      } else {
        dispatch({type: DONE_REFRESHING_FOUNDATION_TOKEN, payload: {api: auth.api}})
        return Promise.reject({message: 'Error refreshing token'})
      }

    })
    .catch((err) => {
      dispatch({type: DONE_REFRESHING_FOUNDATION_TOKEN, payload: {api: auth.api}})
      return Promise.reject({message: 'Error refreshing token'})
    })
  dispatch({type: REFRESHING_FOUNDATION_TOKEN, payload: refreshPromise});

  return refreshPromise;
}
