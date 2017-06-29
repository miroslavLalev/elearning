import { objectsHelper } from '../helpers/objects-helper';
import {  SHOW_LOGIN_DIALOG, HIDE_LOGIN_DIALOG, SHOW_REGISTER_DIALOG, HIDE_REGISTER_DIALOG } from '../actions/static-actions';

const initialState = {
  toggleLogin: false,
  toggleRegister: false
};

const localContext = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOGIN_DIALOG:
      return objectsHelper.mergeObjects(state, { toggleLogin: true });
    case HIDE_LOGIN_DIALOG:
      return objectsHelper.mergeObjects(state, { toggleLogin: false });
    case SHOW_REGISTER_DIALOG:
      return objectsHelper.mergeObjects(state, { toggleRegister: true });
    case HIDE_REGISTER_DIALOG:
      return objectsHelper.mergeObjects(state, { toggleRegister: false });
    default:
      return state;
  }
};

export { localContext };
