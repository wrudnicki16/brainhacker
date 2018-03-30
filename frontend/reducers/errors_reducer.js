import { combineReducers } from 'redux';
import sessionErrorsReducer from './session/session_errors_reducer';
import deckErrorsReducer from './decks/deck_errors_reducer';
import cardErrorsReducer from './cards/card_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  deck: deckErrorsReducer,
  card: cardErrorsReducer
});
