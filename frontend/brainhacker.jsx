import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { signup, login, logout } from './actions/session_actions';
import { fetchDecks, fetchDeck, createDeck, deleteDeck } from './actions/deck_actions';
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
  window.fetchDeck = fetchDeck;
  window.fetchDecks = fetchDecks;
  window.createDeck = createDeck;
  window.deleteDeck = deleteDeck;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
