import { combineReducers } from 'redux';

import cityReducer from './city';
import weatherReducer from './weather';
import errorReducer from './error';

const rootReducer = combineReducers({
  cityReducer,
  weatherReducer,
  errorReducer,
});

export default rootReducer;
