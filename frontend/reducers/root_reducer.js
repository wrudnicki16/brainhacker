import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session/session_reducer';
import entitiesReducer from './entities_reducer';


export default combineReducers({
  errors: errorsReducer,
  session: sessionReducer,
  entities: entitiesReducer
});
