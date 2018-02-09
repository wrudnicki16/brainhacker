import { RECEIVE_CARD } from '../../actions/card_actions';
import { RECEIVE_DECK } from '../../actions/deck_actions';
import { RECEIVE_CONF } from '../../actions/conf_actions';
import { merge } from 'lodash';


const confsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_CONF:
      return merge({}, state, { [action.conf.card_id]: action.conf });
    case RECEIVE_DECK:
      return merge({}, state, action.payload.confs);
    default:
      return state;
  }
};
