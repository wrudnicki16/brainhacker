import decksReducer from './decks/decks_reducer';
import cardsReducer  from './cards/cards_reducer';
import confsReducer from './confs/confs_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  decks: decksReducer,
  cards: cardsReducer,
  confs: confsReducer
});
