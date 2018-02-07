import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { signup, login, logout } from './actions/session_actions';
import { fetchCards, fetchCard, createCard, deleteCard, updateCard } from './actions/card_actions';
import { fetchDeck } from './actions/deck_actions';
import Root from './components/root.jsx';


document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchCard = fetchCard;
  window.fetchCards = fetchCards;
  window.createCard = createCard;
  window.deleteCard = deleteCard;
  window.updateCard = updateCard;
  window.fetchDeck = fetchDeck;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
