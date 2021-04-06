import { combineReducers } from 'redux';
import peopleReducer from './peopleReducer';
import checkReducer from './checkReducer';

const rootReducer = combineReducers({
  people: peopleReducer,
  checked: checkReducer,
});

export default rootReducer;
