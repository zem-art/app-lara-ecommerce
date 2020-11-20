// patch save to store

import {createStore} from 'redux';
import Data from '../reducers/Data';

let store;

export default store = createStore(Data);
