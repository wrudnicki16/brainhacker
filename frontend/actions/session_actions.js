import React from 'react';
import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";


export const login = user => dispatch => {
  return SessionAPIUtil.login(user)
          .then(user1 => dispatch(receiveCurrentUser(user1))
        , err => (
          dispatch(receiveErrors(err.responseJSON))
        ));
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
          .then(user =>
            dispatch(receiveCurrentUser(null))
          , err => (
            dispatch(receiveErrors(err.responseJSON))
  ));
};

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user)
          .then(user1 =>
            dispatch(receiveCurrentUser(user1))
          , err => (
            dispatch(receiveErrors(err.responseJSON))
  ));
};

export const clearErrors = error => dispatch => {
  return dispatch(receiveErrors([]));
};

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};
