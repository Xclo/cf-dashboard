import * as types from '../actions/types';

export default function reducer(state = {}, action = {}) {
  switch(action.type) {
    case types.SEND: {
      return {
        ...state,
        isSending: true,
      };
    }
    default: {
      return state;
    }
  }
}
