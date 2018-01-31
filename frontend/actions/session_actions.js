import React from 'react';
import { signup, login, logout } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const loginAction = user => dispatch => {
  return login(user)
          .then(user1 => dispatch(receiveCurrentUser(user1)));
};

export const logoutAction = () => dispatch => {
  return logout()
          .then(user1 => dispatch(receiveCurrentUser(user1)));
};

export const signupAction = user => dispatch => {
  return signup(user)
          .then(user1 => dispatch(receiveCurrentUser(user1)));
};

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};
