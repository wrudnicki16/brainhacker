import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { signup, login, logout } from './util/session_api_util';
import Root from './components/root.jsx';


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
