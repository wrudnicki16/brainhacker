import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { merge } from "lodash";


const sessionReducer = (oldState = {currentUser: null}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      return merge({}, { currentUser });
    default:
      return oldState;
  }
};

export default sessionReducer;
