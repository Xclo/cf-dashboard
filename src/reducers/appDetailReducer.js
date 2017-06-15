import {
  SELECT_APP,
  FETCHING_APPS
} from '../actions/types'

export default function reducer(state={
    app: undefined,
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    // console.log("In app Detail Reducers: " + action.type + " payload " + JSON.stringify(action.payload));
    switch (action.type) {
      case FETCHING_APPS: {
        return {
          ...state,
          app: undefined
        }
      }
      case SELECT_APP: {
        var appStatus = action.payload.status;

        return {
          ...state,
          app: {
            details: action.payload.app, // to be deleted once we clean this up
            name: action.payload.app.name,
            status: appStatus
          }
        }
      }
    }

    return state
}
