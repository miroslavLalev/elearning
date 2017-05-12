export const SHOW_LOGIN_DIALOG = 'SHOW_LOGIN_DIALOG';
export const HIDE_LOGIN_DIALOG = 'HIDE_LOGIN_DIALOG';

export function showLoginDialog() {
  return { type: SHOW_LOGIN_DIALOG };
};

export function hideLoginDialog() {
  return { type: HIDE_LOGIN_DIALOG };
};
