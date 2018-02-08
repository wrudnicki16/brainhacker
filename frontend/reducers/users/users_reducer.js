import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { merge } from "lodash";

// don't need this probably
const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      if (currentUser) {
        return merge({}, { [currentUser.id]: currentUser} );
      } else {
        return oldState;
      }
    default:
      return oldState;
  }
};

export default usersReducer;
