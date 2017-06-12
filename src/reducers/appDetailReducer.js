import {
  SELECT_APP
} from '../actions/types'

export default function reducer(state={
    app: undefined,
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    // console.log("In app Detail Reducers: " + action.type + " payload " + JSON.stringify(action.payload));
    switch (action.type) {
      case SELECT_APP: {
        var appStatus = action.payload.data.status;

        return {
          ...state,
          app: {
            details: action.payload, // to be deleted once we clean this up
            name: action.payload.data.app.name,
            status: appStatus
          }
        }
      }
    }

    return state
}
