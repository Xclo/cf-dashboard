import {
  SELECT_APP
} from '../actions/types'

export default function reducer(state={
    app: undefined,
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

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
