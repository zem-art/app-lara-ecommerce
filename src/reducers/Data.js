// // pacth to add to cart and remove to cart

import {combineReducers} from 'redux';
import userReducer from '../controller/user';

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
