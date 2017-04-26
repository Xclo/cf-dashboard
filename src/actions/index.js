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
