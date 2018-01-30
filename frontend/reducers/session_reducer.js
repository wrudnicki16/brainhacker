import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from "lodash";


const sessionReducer = (oldState = {currentUser: null, errors: []}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {currentUser: action.currentUser});
    default:
      return oldState;
  }
};

export default sessionReducer;
