import { tokenHelper } from '../proxies/helpers/token-helper';

import { hideLoginDialog } from './static-actions';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const LOGIN = 'LOGIN';

export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const LOGOUT = 'LOGOUT';

export const REQUEST_REFRESH_TOKEN = 'REQUEST_REFRESH_TOKEN';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

function _requestLogin() {
  return { type: REQUEST_LOGIN };
}

function _login(token) {
  return {
    type: LOGIN,
    token: token
  }
}

export function login(credentials) {
  console.log(credentials)
  return (dispatch, getState) => {
    dispatch(_requestLogin());
    // todo: make it work with credentials
    return tokenHelper.getToken(credentials).then(token => {
      console.log('Logged in! ' + token);
      dispatch(_login(token));
      dispatch(hideLoginDialog());
    });
  }
}
