import { combineReducers } from 'redux'

// import all reducers
import { localContext } from './static-actions-reducer';

const reducer = combineReducers({
  localContext
});
export { reducer };
