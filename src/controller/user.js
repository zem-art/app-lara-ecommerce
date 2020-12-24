// ini bagian user login

const defaultstate = {
  login: false,
  user: '',
};

const userToken = (state = defaultstate, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {login: true, user: action.payload};
    default:
      return state;
  }
};

export default userToken;
