import decksReducer from './decks/decks_reducer';
import cardsReducer  from './cards/cards_reducer';
import usersReducer from './users/users_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  decks: decksReducer,
  cards: cardsReducer
});
