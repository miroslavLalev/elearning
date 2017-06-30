import { tokenRegistry } from '../registry/token-registry';
import { hideLoginDialog, hideRegisterDialog } from './static-actions';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const LOGIN = 'LOGIN';

export const LOGOUT = 'LOGOUT';

export const REQUEST_REFRESH_TOKEN = 'REQUEST_REFRESH_TOKEN';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

export const REQUEST_REGISTER = 'REQUEST_REGISTER';
export const REGISTER = 'REGISTER';

function _requestLogin() {
  return { type: REQUEST_LOGIN };
};

function _login(user) {
  return {
    type: LOGIN,
    user
  };
};

export function login(credentials) {
  return (dispatch, getState) => {
    dispatch(_requestLogin());
    return tokenRegistry.requestToken(credentials).then(obj => {
      dispatch(_login(obj.user));
      tokenRegistry.setToken(obj.token);
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

function _logout() {
  return { type: LOGOUT };
};

export function logout() {
  return (dispatch, getState) => {
    dispatch(_logout());
    tokenRegistry.clearToken();
  };
};
