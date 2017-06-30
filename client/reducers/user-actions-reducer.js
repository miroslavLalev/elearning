import { objectsHelper } from '../helpers/objects-helper';
import { LOGIN } from '../actions/user-actions';

const initialState = {
  user: {
    id: '1',
    email: 'polito@gmail.com',
    firstname: 'Polina',
    lastname: 'Krasteva',
    role: 'STUDENT'
  }
}

const userContext = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return objectsHelper.mergeObjects(state, { user: action.user });
      break;
    default:
      return state;
  }
};

export { userContext };
