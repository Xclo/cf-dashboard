export default function reducer(state={
    foundationList: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_FOUNDATIONS": {
        return {...state, fetching: true}
      }
      case "FETCH_FOUNDATIONS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_FOUNDATIONS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          foundationList: action.payload,
        }
      }
      case "ADD_FOUNDATION": {
        return {
          ...state,
          foundationList: [...state.foundations, action.payload],
        }
      }
      case "UPDATE_FOUNDATION": {
        const { api, text } = action.payload
        const newFoundationList = [...state.foundations]
        const foundationToUpdate = newFoundationList.findIndex(foundation => foundation.api === api)
        newFoundationList[foundationToUpdate] = action.payload;

        return {
          ...state,
          foundationList: newFoundationList,
        }
      }
      case "DELETE_FOUNDATION": {
        return {
          ...state,
          foundationList: state.foundations.filter(foundation => foundation.api !== action.payload),
        }
      }
    }

    return state
}
