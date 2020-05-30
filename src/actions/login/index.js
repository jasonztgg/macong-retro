import actionNames from '../../constants/action-names';
import firebase from '../../firebase';

const loginRequest = (email, password) => ({
  type: actionNames.LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
});
const loginSuccess = (user) => ({
  type: actionNames.LOGIN_SUCCESS,
  payload: { user },
});
const loginError = (error) => ({
  type: actionNames.LOGIN_ERROR,
  payload: { error },
});

// dispatch(login(email, password));

export const login = (email, password) => (dispatch) => {
  dispatch(loginRequest(email, password));

  const user = firebase.auth().onAuthStateChanged(
    (authUser) => {
      dispatch(loginSuccess(user));
    },
    (error) => {
      dispatch(loginError(error));
    },
  );
};
