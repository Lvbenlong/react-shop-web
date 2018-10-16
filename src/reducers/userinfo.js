import * as actionTypes from '../constants/userinfo';

const initialState = {};

export default function userinfo(state = initialState, action) {
  switch (action.type) {
    // 登录
    case actionTypes.USERINFO_LOGIN:
      return action.data;

    // dengchu
    case actionTypes.USERINFO_LOGOUT:
      return {};

    // update
    case actionTypes.UPDATE_USERINFO:
      return { ...state, ...action.data };

    default:
      return state;
  }
}
