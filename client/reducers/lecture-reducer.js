import { connect } from 'react-redux';

import { SHOW_LECTURE_DIALOG, HIDE_LECTURE_DIALOG } from '../actions/static-actions';
import { objectsHelper } from '../helpers/objects-helper';

const initialState = {
  lecture: {
    type: 'DOCUMENT',
    name: 'Installing R',
    text: 'Before you install R on your computer, the first thing to do is to check whether R is already installed on your computer (for example, by a previous user). These instructions will focus on installing R on a Windows PC. However, I will also briefly mention how to install R on a Macintosh or Linux computer (see below).If you are using a Windows PC, there are two ways you can check whether R is already installed on your computer'

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
