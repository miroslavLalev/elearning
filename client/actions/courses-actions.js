export const FETCH_COURSES = 'FETCH_COURSES';
export const RECEIVE_COURSES = 'RECIEVED_COURSES';

export const FETCH_COURSE = 'FETCH_COURSE';
export const RECEIVE_COURSE = 'RECEIVE_COURSE';

function _fetchCourses() {
  return { type: FETCH_COURSES };
};

function _receiveCourses(courses) {
  return { type: RECEIVE_COURSES, courses };
};

export function getCourses() {
  return (dispatch, getState) => {
    dispatch(_fetchCourses());
    return window.coursesProxy.getCourses().then(courses => {
      dispatch(_receiveCourses(courses));
    }).catch(err => {
      console.log(err);
    });
  };
};

function _fetchCourse() {
  return { type: FETCH_COURSE };
};

function _receiveCourse(course) {
  return { type: RECEIVE_COURSE, course };
};

export function getCourse(id) {
  return (dispatch, getState) => {
    dispatch(_fetchCourse());
    return window.coursesProxy.getCourse(id).then(course => {
      dispatch(_receiveCourse(course))
    }).catch(err => {
      console.log(err);
    });
  };
};
