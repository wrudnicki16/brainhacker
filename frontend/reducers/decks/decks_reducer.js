import { RECEIVE_DECKS, RECEIVE_DECK } from '../../actions/deck_actions';
import { merge } from 'lodash';


const decksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DECKS:
      return merge({}, state, { decks: action.decks });
    case RECEIVE_DECK:
      return merge({}, state, { deck: action.deck });
    default:
      return state;
  }
};

export default decksReducer;
