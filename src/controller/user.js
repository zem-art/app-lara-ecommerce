// ini bagian user login

import AsyncStorage from '@react-native-community/async-storage';

const defaultstate = {
  login: false,
  user: '',
};

const userToken = (state = defaultstate, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {login: true, user: action.payload};
    case 'LOG_OT':
      AsyncStorage.clear();
      return {login: false, user: {}};
    default:
      return state;
  }
};

export default userToken;
