import * as CardAPIUtil from '../util/card_api_util';

export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const RECEIVE_CARD = "RECEIVE_CARD";
export const REMOVE_CARD = "REMOVE_CARD";
export const UPDATE_CARD = "UPDATE_CARD";
export const RECEIVE_CARD_ERRORS = "RECEIVE_CARD_ERRORS";

export const receiveCards = (cards) => {
  return {
    type: RECEIVE_CARDS,
    cards
  };
};

export const receiveCard = (card) => {
  return {
    type: RECEIVE_CARD,
    card
  };
};

export const removeCard = (cardId) => {
  return {
    type: REMOVE_CARD,
    cardId
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_CARD_ERRORS,
    errors
  }
}

export const fetchCards = (deckId) => dispatch => {
  return CardAPIUtil.fetchCards(deckId)
      .then((cards) => dispatch(receiveCards(cards)));
};

export const fetchCard = (id) => dispatch => {
  return CardAPIUtil.fetchCard(id)
      .then((card) => dispatch(receiveCard(card)));
};

export const deleteCard = (id) => dispatch => {
  return CardAPIUtil.deleteCard(id)
      .then(() => dispatch(removeCard(id)))
      .fail(err => dispatch(receiveErrors(err.responseJSON)));
};

export const createCard = (payload) => dispatch => {
  return CardAPIUtil.createCard(payload)
      .then((card1) => dispatch(receiveCard(card1)))
      .fail(err => dispatch(receiveErrors(err.responseJSON)));
};

export const updateCard = (payload) => dispatch => {
  return CardAPIUtil.updateCard(payload)
      .then((card1) => dispatch(receiveCard(card1)))
      .fail(err => dispatch(receiveErrors(err.responseJSON)));
};

export const clearErrors = error => dispatch => {
  return dispatch(receiveErrors([]));
};