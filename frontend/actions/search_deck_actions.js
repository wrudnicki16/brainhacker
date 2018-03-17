import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULT = "RECEIVE_SEARCH_RESULT";

export const receiveSearchResult = (decks) => {
  return {
    type: RECEIVE_SEARCH_RESULT,
    searchDecks: decks
  };
};

export const searchDecks = query => dispatch => {
  return SearchAPIUtil.searchDecks(query)
      .then(decks => dispatch(receiveSearchResult(decks)));
};
