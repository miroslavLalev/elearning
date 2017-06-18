export const SHOW_LOGIN_DIALOG = 'SHOW_LOGIN_DIALOG';
export const HIDE_LOGIN_DIALOG = 'HIDE_LOGIN_DIALOG';
export const SHOW_REGISTER_DIALOG = 'SHOW_REGISTER_DIALOG';
export const HIDE_REGISTER_DIALOG = 'HIDE_REGISTER_DIALOG';

export function showLoginDialog() {
  return { type: SHOW_LOGIN_DIALOG };
};

export function hideLoginDialog() {
  return { type: HIDE_LOGIN_DIALOG };
};

export function showRegisterDialog() {
  return { type: SHOW_REGISTER_DIALOG };
};

export function hideRegisterDialog() {
  return { type: HIDE_REGISTER_DIALOG };
};
