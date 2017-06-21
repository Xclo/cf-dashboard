import * as types from '../actions/types'

export default function reducer(state={
    appList: [],
    fetching: false,
    fetched: false,
    error: null,
    selectedApp: undefined
  }, action) {

    switch (action.type) {
      case types.FETCHING_APPS: {
        return {
          ...state,
          fetching: true,
          appList: []
        }
      }

      case types.FETCH_APPS_REJECTED: {
        let apps = [...state.appList]
        apps = _.remove(apps, function(app) {
          return app.api === action.payload.api;
        });

        return {
          ...state,
          fetching: false,
          error: action.payload,
          appList: apps
        }
      }

      case types.FETCH_APPS_FULFILLED: {
        let apps = [...state.appList]
        apps = _.remove(apps, function(app) {
            return app.api === action.payload.api;
        });
        apps = _.concat(apps, action.payload.apps)

        return {
          ...state,
          fetching: false,
          fetched: true,
          appList: apps
        }
      }

      case types.FETCH_APP_FULFILLED: {
        let apps = [...state.appList]
        apps.push(action.payload.app)

        return {
          ...state,
          fetching: false,
          fetched: true,
          appList: [...state.appList, action.payload]
        }
      }

      case types.LOGOUT_FOUNDATION: {
        let apps = [...state.appList]
        apps = _.remove(apps, function(app) {
            return app.api === action.payload.api;
        });

        return {
          ...state,
          appList: apps
        }
      }
      // case "ADD_APP": {
      //   return {
      //     ...state,
      //     appList: [...state.appList, action.payload],
      //   }
      // }
      // case "UPDATE_APP": {
      //   const { id, text } = action.payload
      //   const newAppList = [...state.appList]
      //   const appToUpdate = newAppList.findIndex(app => app.id === id)
      //   newAppList[appToUpdate] = action.payload;
      //
      //   return {
      //     ...state,
      //     appList: newAppList,
      //   }
      // }
      // case "DELETE_APP": {
      //   return {
      //     ...state,
      //     appList: state.appList.filter(app => app.id !== action.payload),
      //   }
      // }
    }

    return state
}
