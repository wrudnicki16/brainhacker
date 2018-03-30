import { RECEIVE_CARD, RECEIVE_CARD_ERRORS } from '../../actions/card_actions';


const cardErrorsReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_CARD:
      return []
    case RECEIVE_CARD_ERRORS:
      return action.errors
    default:
      return state;
  }
}


export default cardErrorsReducer;