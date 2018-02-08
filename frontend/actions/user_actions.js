import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const fetchUsers = () => (dispatch) => {
  return UserAPIUtil.fetchUsers()
    .then(users => dispatch(receiveAllUsers(users)));
};

export const receiveAllUsers = users => ({
  type: RECEIVE_USERS,
  users
});

// probably ignore this
