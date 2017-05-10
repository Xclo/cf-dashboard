import {
  FETCH_APPS,
  FETCH_APPS_REJECTED,
  FETCH_APPS_FULFILLED,
  SELECTED_APP
} from '../actions/types'

export default function reducer(state={
    appList: [],
    fetching: false,
    fetched: false,
    error: null,
    selectedApp: undefined
  }, action) {

    switch (action.type) {
      case FETCH_APPS: {
        return {...state, fetching: true}
      }
      case FETCH_APPS_REJECTED: {
        return {...state, fetching: false, error: action.payload}
      }
      case FETCH_APPS_FULFILLED: {
        return {
          ...state,
          fetching: false,
          fetched: true,
          appList: action.payload,
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
