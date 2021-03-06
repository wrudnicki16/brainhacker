import * as DeckAPIUtil from '../util/deck_api_util';

export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const RECEIVE_DECK = "RECEIVE_DECK";
export const RECEIVE_DECK_ERRORS = "RECEIVE_DECK_ERRORS";
export const REMOVE_DECK = "REMOVE_DECK";
export const RECEIVE_MASTERY = "RECEIVE_MASTERY";

export const receiveDecks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    decks
  };
};

export const receiveDeck = (payload) => {
  return {
    type: RECEIVE_DECK,
    payload
  };
};

export const receiveMastery = (payload) => {
  return {
    type: RECEIVE_MASTERY,
    payload
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_DECK_ERRORS,
    errors
  };
};

export const removeDeck = (deckId) => {
  return {
    type: REMOVE_DECK,
    deckId
  };
};

export const deleteDeck = (id) => dispatch => {
  return DeckAPIUtil.deleteDeck(id)
      .then(() => dispatch(removeDeck(id)))
      .fail(err => dispatch(receiveErrors(err.responseJSON)));
};

export const createDeck = (deck) => dispatch => {
  return DeckAPIUtil.createDeck(deck)
      .then((deck1) => dispatch(receiveDeck(deck1)),
            err => dispatch(receiveErrors(err.responseJSON))
          );
};

export const fetchDeck = (id) => dispatch => {
  return DeckAPIUtil.fetchDeck(id)
      .then((deck) => dispatch(receiveDeck(deck)));
};

export const fetchDecks = () => dispatch => {
  return DeckAPIUtil.fetchDecks()
      .then((decks) => dispatch(receiveDecks(decks)));
};

export const getMastery = (id) => dispatch => {
  return DeckAPIUtil.getMastery(id)
      .then((deck) => dispatch(receiveMastery(deck)));
};

export const clearErrors = error => dispatch => {
  return dispatch(receiveErrors([]));
};
