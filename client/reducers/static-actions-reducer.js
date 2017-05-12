import { connect } from 'react-redux';

import { objectsHelper } from '../helpers/objects-helper';
import {  SHOW_LOGIN_DIALOG, HIDE_LOGIN_DIALOG } from '../actions/static-actions';

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
    default:
      return state;
  }
};

export { localContext };
