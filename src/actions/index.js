import axios from 'axios';

export function fetchApps () {
  return function(dispatch) {
    axios.get('http://localhost:5000/api/stub/apps')
      .then((response) => {
        dispatch({type: "FETCH_APPS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_APPS_REJECTED", payload: err})
      })
  }
}

export function fetchFoundations () {
  return function(dispatch) {
    axios.get('http://localhost:5000/api/stub/foundations')
      .then((response) => {
        dispatch({type: "FETCH_FOUNDATIONS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_FOUNDATIONS_REJECTED", payload: err})
      })
  }
}
export function fetchAppDetail () {
  return function(dispatch) {
    axios.get('http://localhost:5000/api/stub/app/1')
      .then((response) => {
        dispatch({type: "FETCH_APP_DETAILS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_APP_DETAILS_REJECTED", payload: err})
      })
  }
}
