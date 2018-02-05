import {
  RECEIVE_DECK,
  RECEIVE_DECK_ERRORS,
  RECEIVE_DECKS,
  REMOVE_DECK
} from '../../actions/deck_actions';

const deckErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_DECK:
      return [];
    case RECEIVE_DECK_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default deckErrorsReducer;
