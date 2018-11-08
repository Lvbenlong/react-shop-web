import * as actionTypes from '../constants/userinfo';

export function login(data) {
  return {
    type: actionTypes.USERINFO_LOGIN,
    data,
  };
}

export function logout() {
  return {
    type: actionTypes.USERINFO_LOGOUT,
  };
}

export function update(data) {
  return {
    type: actionTypes.UPDATE_USERINFO,
    data,
  };
}