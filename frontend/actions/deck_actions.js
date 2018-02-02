import * as DeckAPIUtil from '../util/decks_api_util';

export const RECEIVE_DECKS = "RECEIVE_DECKS";


export const receiveDecks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    decks
  };
};

export const fetchDecks = () => dispatch => {
  return DeckAPIUtil.fetchDecks()
      .then((decks) => dispatch(receiveDecks(decks)));
};
