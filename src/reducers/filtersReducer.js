import _ from 'lodash'

import {
  SEARCH_FIELD_UPDATED,
  TOGGLE_FOUNDATION
} from '../actions/types'

export default function reducer(state = {
    foundations: [],
    searchField: ''
  }, action) {
    switch (action.type) {
      case TOGGLE_FOUNDATION: {
        let foundations = [...state.foundations]
        if (foundations.indexOf(action.payload) !== -1) {
          foundations.splice(foundations.indexOf(action.payload), 1)
        } else {
          foundations.push(action.payload);
        }
        return {
          ...state,
          foundations: foundations
        }
      }
      case SEARCH_FIELD_UPDATED: {
        return {
          ...state,
          searchField: action.payload
        }
      }

      default:
        return state;
    }
}
