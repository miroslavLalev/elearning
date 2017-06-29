import { combineReducers } from 'redux'

// import all reducers
import { localContext } from './static-actions-reducer';
import { coursesContext } from './courses-reducer';
import { courseContext } from './course-view-reducer';
import { usersContext } from './users-reducer';
import { userContext } from './user-actions-reducer';

const reducer = combineReducers({
  localContext,
  coursesContext,
  courseContext,
  usersContext,
  userContext
});

export { reducer };
