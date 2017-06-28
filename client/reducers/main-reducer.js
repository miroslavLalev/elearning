import { combineReducers } from 'redux'

// import all reducers
import { localContext } from './static-actions-reducer';
import { coursesContext } from './courses-reducer';
import { courseContext } from './course-view-reducer';

const reducer = combineReducers({
  localContext,
  coursesContext,
  courseContext
});

export { reducer };
