import { RECEIVE_DECKS, RECEIVE_DECK, REMOVE_DECK, RECEIVE_MASTERY } from '../../actions/deck_actions';
import { RECEIVE_CONF } from '../../actions/conf_actions';
import { merge } from 'lodash';


const decksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    // case RECEIVE_CONF:
    //   return merge({}, action.deck);
    case RECEIVE_DECKS:
      return merge({}, state, action.decks);
    case RECEIVE_DECK:
      return merge({}, state, { [action.payload.deck.id]: action.payload.deck });
    case RECEIVE_MASTERY:
      return merge({}, state, { [action.payload.deck.id]: action.payload.deck });
    case REMOVE_DECK:
      let newState = merge({}, state);
      delete newState[action.deckId];
      return newState;
    default:
      return state;
  }
};

export default decksReducer;
