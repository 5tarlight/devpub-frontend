import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';
import { server } from '../secret';

const LOGIN_PENDING = 'login/PENDING' as const;
const LOGIN_SUCCESS = 'login/SUCCESS' as const;
const LOGIN_FAILURE = 'login/FAILURE' as const;

const loginPending = createAction(LOGIN_PENDING);
const loginSuccess = createAction(LOGIN_SUCCESS);
const loginFailure = createAction(LOGIN_FAILURE);

const requestLogin = (email: string, password: string) => {
  const query = `query {
  login(email:"${email}", password:"${password}") {
    success
    user {
      id
      email
      displayedName
    }
  }
}`;
  return axios.post('http://' + server, query, {
    headers: { 'Content-Type': 'application/graphql' },
  });
};

export const postLogin = (email: string, password: string) => (
  dispatch: any,
) => {
  dispatch(loginPending());

  return requestLogin(email, password)
    .then((res) => {
      dispatch(loginSuccess(res));
      return res;
    })
    .catch((err) => {
      dispatch(loginFailure(err));
      throw err;
    });
};

export type LoginType =
  | ReturnType<typeof loginPending>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>;

export type LoginState = {
  pending: boolean;
  error: boolean;
  data: {
    id: string;
    displayedName: string;
    email: string;
  };
};

const initialState: LoginState = {
  pending: false,
  error: false,
  data: {
    id: '',
    email: '',
    displayedName: '',
  },
};

export default handleActions(
  {
    [LOGIN_PENDING]: (state, action) => {
      return {
        ...state,
        pending: true,
        error: false,
      };
    },
    [LOGIN_FAILURE]: (state, action) => {
      return {
        ...state,
        error: true,
      };
    },
    [LOGIN_SUCCESS]: (state, action) => {
      const {
        payload: {
          data: { id, email, displayedName },
        },
      } = action;

      return {
        ...state,
        pending: false,
        data: {
          id,
          email,
          displayedName,
        },
      };
    },
  },
  initialState,
);
