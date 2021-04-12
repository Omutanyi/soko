import {combineReducers} from 'redux';
import sokoReducer from './sokoReducer.js';

export default combineReducers({
  cart: sokoReducer,
});