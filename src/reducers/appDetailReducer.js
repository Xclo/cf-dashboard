import {
  SELECT_APP
} from '../actions/types'

export default function reducer(state={
    app: undefined,
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    console.log("In app Detail Reducers: " + action.type + " payload " + JSON.stringify(action.payload));

    switch (action.type) {
      case SELECT_APP: {
        return {
          ...state,
          app: action.payload
        }
      }
    }

    return state
}
