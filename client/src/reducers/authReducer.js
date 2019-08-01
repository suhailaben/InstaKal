import {SET_CURRENT_USER} from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    iaAuthenticated: false,
    user: {}
}; 

// export function(state, action)
export default function(state = initialState, action) {
    switch(action.type) {
      case SET_CURRENT_USER: {
        return {
          ...state,
          isAuthenticated: !isEmpty(action.paylod),
          user: action.payload
        }
      }
      default:
        return state;
    }  
  }