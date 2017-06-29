import { hideLoginDialog, hideRegisterDialog } from './static-actions';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const LOGIN = 'LOGIN';

export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const LOGOUT = 'LOGOUT';

export const REQUEST_REFRESH_TOKEN = 'REQUEST_REFRESH_TOKEN';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

export const REQUEST_REGISTER = 'REQUEST_REGISTER';
export const REGISTER = 'REGISTER';

function _requestLogin() {
  return { type: REQUEST_LOGIN };
};

function _login(token) {
  return {
    type: LOGIN,
    token: token
  };
};

export function login(credentials) {
  return (dispatch, getState) => {
    dispatch(_requestLogin());
    return window.tokenProxy.getToken(credentials).then(token => {
      dispatch(_login(token));
      dispatch(hideLoginDialog());
    });
  };
};

function _requestRegister() {
  return { type: REQUEST_REGISTER };
};

function _register() {
  return { type: REGISTER };
};

export function register(user) {
  return (dispatch, getState) => {
    dispatch(_requestRegister());
    return window.usersProxy.register(user).then(res => {
      dispatch(hideRegisterDialog());
    }).catch(err => {
      console.log('Failed to register.');
      console.log(err);
    });
  };
};
