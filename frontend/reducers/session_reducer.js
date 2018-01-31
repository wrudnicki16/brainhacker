import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from "lodash";


const sessionReducer = (oldState = {currentUser: null}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      console.log('action.currentUser', action.currentUser);
      console.log('action', action);
      let currentUser = action.currentUser;
      return merge({}, { currentUser });
    default:
      return oldState;
  }
};

export default sessionReducer;
