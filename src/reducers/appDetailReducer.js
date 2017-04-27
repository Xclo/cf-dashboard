export default function reducer(state={
    appDetail: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_APP_DETAIL": {
        return {...state, fetching: true}
      }
      case "FETCH_APP_DETAIL_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_APP_DETAIL_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          appDetail: action.payload.appDetail,
        }
      }
    }

    return state
}
