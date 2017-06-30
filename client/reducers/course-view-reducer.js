import { objectsHelper } from '../helpers/objects-helper';
import { FETCH_COURSE, RECEIVE_COURSE } from '../actions/courses-actions';

const initialState = {
  isFetching: false,
  course: {
    id: '1',
    name: 'Introduction to Probability and Data',
    requirements: ['Basic Maths'],
    description: 'This course introduces you to sampling and exploring data, as well as basic probability theory and Bayes rule. You will examine various types of sampling methods, and discuss how such methods can impact the scope of inference. ',
    topics: ['Installing and Using R and RStudio', 'Use this software for lab exercies and a final project'],
    lectures:[
      {
        id:'1',
        name:'Installing R',
        about:'You will learn how to install and configure R'}
      ,{
        id:'2',
        name:'R basic syntax',
        about:'We will cover R basic syntax'
      }
    ]
  }
};

const courseContext = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE:
      return objectsHelper.mergeObjects(state, { isFetching: true });
      break;
    case RECEIVE_COURSE:
      return objectsHelper.mergeObjects(state, { isFetching: false, course: action.course })
      break;
    default:
      return state;
  }
};

export { courseContext };
