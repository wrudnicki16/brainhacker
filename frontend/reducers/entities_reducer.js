import decksReducer from './decks/decks_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  decks: decksReducer
});
