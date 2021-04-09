import counterReducer from './counter';
import isLoggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer
})

//ex6 syntax
/* const allReducer = combineReducers({
  counterReducer,
  isLoggedReducer
}) */

export default allReducers;