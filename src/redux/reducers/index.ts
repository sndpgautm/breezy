import { combineReducers } from 'redux';

import cityReducer from './city';
import weatherReducer from './weather';

const rootReducer = combineReducers({
  cityReducer,
  weatherReducer,
});

export default rootReducer;
