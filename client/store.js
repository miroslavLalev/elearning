import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { reducer } from './reducers/main-reducer';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };
