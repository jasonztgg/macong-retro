import actionNames from '../constants/action-names';

const user = (state, action) => {
  switch (action.type) {
    case actionNames.LOGIN_SUCCESS:
      return { user: action.payload.user };
    case actionNames.LOGIN_ERROR:
      return { error: action.payload.error };

    default:
      return state;
  }
};

export default user;
