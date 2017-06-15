import * as types from './types.jsx';
import axios from 'axios';
import Promise from 'bluebird'

export function dispatchClientAction (action) {
  console.log("dispatchClientAction::" + action);

  switch (action.type) {
    case types.FETCH_APPS: {
      console.log("Fetch Apps");
    }

    case types.FETCH_APPS_REJECTED: {
      console.log("Fetch Apps Rejected");

    }

    case types.FETCH_APPS_FULFILLED: {
      console.log("Fetch Apps Fulfilled");

    }

    case types.LOGOUT_FOUNDATION: {
      console.log("Fetch Apps Foundation");

    }
  }
}

export function selectAppList (foundation) {
  return {
    type: types.SELECT_APPLIST,
    foundation
  }
}


export function selectApp(app) {
  let auth = localStorage.getItem(app.api)
  auth = JSON.parse(auth);

  let request = {
    url: 'https://cf-radiator-server.apps.pcf.cloud/api/apps/'+app.metadata.guid + '',
    method: 'get',
    headers: {
      api: app.api,
      authorization: `${auth.tokenType} ${auth.accessToken}`
    }
  }

  return function(dispatch) {
    axios(request)
      .then((response) => {
        dispatch({type: types.SELECT_APP, payload: response.data})
      })
      .catch((err) => {
        dispatch({type: types.SELECT_APP_FAILED, payload: err})
      })
  }
}

export function fetchApps (foundations) {
  return function(dispatch) {
    let foundationPromises = [];
    dispatch({type: types.FETCHING_APPS})

    _.values(foundations).forEach(foundation => {
      if (foundation.auth) {
        let auth = localStorage.getItem(foundation.api)
        auth = JSON.parse(auth);

        let request = {
          url: 'https://cf-radiator-server.apps.pcf.cloud/api/apps',
          method: 'get',
          headers: {
            api: foundation.api,
            authorization: `${auth.tokenType} ${auth.accessToken}`
          }
        }
        foundationPromises.push(axios(request))
      }
    });


    Promise.all(foundationPromises).then(responses => {
      let apps = [];
      responses.forEach(response => {
        response.data.forEach(app => {
          if (app.buildpack === null) {
            app.buildpack = 'No Buildpack';
          }
          app.state = app.state.charAt(0).toUpperCase() + app.state.slice(1).toLowerCase(); //format the state of the app
          apps.push(app)

          let foundation = _.find(foundations, {api: app.api})
          app.foundationName = foundation.name
        })
      });
      dispatch({type: types.FETCH_APPS_FULFILLED, payload: apps})
    }).catch(error => {
      console.log(error);
      dispatch({type: types.FETCH_APPS_REJECTED, payload: error})
    });
  }
}

export function fetchAppDetail (id) {
  return function(dispatch) {
    console.log("In fetchAppDetail" + id);
    axios.get('https://cf-radiator-server.apps.pcf.cloud/api/app/'+id)
      .then((response) => {
        dispatch({type: types.FETCH_APP_DETAILS_FULFILLED, payload: response.data})
      })
      .catch((err) => {
        dispatch({type: types.FETCH_APP_DETAILS_REJECTED, payload: err})
      })
  }
}
