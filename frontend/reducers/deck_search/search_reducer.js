import { RECEIVE_SEARCH_RESULT } from '../../actions/search_deck_actions';
import { merge } from 'lodash';

const SearchReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_SEARCH_RESULT:
      return action.searchDecks;
    default:
      return state;
  }
};

export default SearchReducer;
