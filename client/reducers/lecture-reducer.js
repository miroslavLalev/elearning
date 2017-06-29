import { connect } from 'react-redux';

import { SHOW_LECTURE_DIALOG, HIDE_LECTURE_DIALOG } from '../actions/static-actions';
import { objectsHelper } from '../helpers/objects-helper';

const initialState = {
  lecture: {
    type: 'DOCUMENT',
    name: 'Learning document',
    text: 'Some lecturing...'
  },
  toggleLecture: false
};

const lectureContext = (state = initialState, action) => {
  switch(action.type){
    case SHOW_LECTURE_DIALOG:
      return objectsHelper.mergeObjects(state, { toggleLecture: true });
    case HIDE_LECTURE_DIALOG:
      return objectsHelper.mergeObjects(state, { toggleLecture: false });
    default:
      return state;
  }
}

export { lectureContext };
