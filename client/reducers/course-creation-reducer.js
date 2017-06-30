import { objectsHelper } from '../helpers/objects-helper';
import { SHOW_COURSE_CREATION_DIALOG, HIDE_COURSE_CREATION_DIALOG } from '../actions/static-actions';

const initialState = {
  courseData: {
    name: '',
    description: ''
  },
  toggleCourseCreation: false
}

const courseCreationContext = (state = initialState, action) => {
  switch(action.type){
    case SHOW_COURSE_CREATION_DIALOG:
      return objectsHelper.mergeObjects(state, { toggleCourseCreation: true });
    case HIDE_COURSE_CREATION_DIALOG:
      return objectsHelper.mergeObjects(state, { toggleCourseCreation: false });
    default:
      return state;
  }
}

export { courseCreationContext };
