import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from "lodash";

const sessionErrorsReducer = (oldState = [], action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, []);
    case RECEIVE_ERRORS:
      return merge({}, oldState, action.errors);
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;
