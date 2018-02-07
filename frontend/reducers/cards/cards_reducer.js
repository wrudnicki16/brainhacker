import { RECEIVE_CARDS, RECEIVE_CARD, REMOVE_CARD } from '../../actions/card_actions';
import { RECEIVE_DECK } from '../../actions/deck_actions';
import { merge } from 'lodash';


const cardsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DECK:
      return merge({}, action.payload.cards);
    case RECEIVE_CARDS:
      return merge({}, action.cards);
    case RECEIVE_CARD:
      return merge({}, state, { [action.payload.card.id]: action.payload.card });
    case REMOVE_CARD:
      let newState = merge({}, state);
      delete newState[action.cardId];
      return newState;
    default:
      return state;
  }
};

export default cardsReducer;
