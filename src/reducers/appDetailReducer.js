export default function reducer(state={
    app: undefined,
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_APP_DETAILS": {
        return {...state, fetching: true}
      }
      case "FETCH_APP_DETAILS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_APP_DETAILS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          app: action.payload,
        }
      }
    }

    return state
}
