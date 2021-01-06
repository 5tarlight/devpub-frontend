import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';
import { server } from '../secret';

const REGISTER_POST_PENDING = 'register/POST_PENDING' as const;
const REGISTER_POST_SUCCESS = 'register/POST_SUCCESS' as const;
const REGISTER_POST_FAILURE = 'register/POST_FAILURE' as const;

const registerPostPending = createAction(REGISTER_POST_PENDING);
const registerPostSuccess = createAction(REGISTER_POST_SUCCESS);
const reigsterPostFailure = createAction(REGISTER_POST_FAILURE);

// export const register = createAction(REGISTER, tryRegister);
// export const register = (
//   email: string,
//   displayedName: string,
//   password: string,
//   setErrorMsg: (msg: string) => any,
//   redirect: (path: string) => any,
// ) => ({
//   type: REGISTER,
//   payload: {
//     email,
//     displayedName,
//     password,
//     setErrorMsg,
//     redirect,
//   },
// });

const requestRegister = (
  email: string,
  displayedName: string,
  password: string,
) => {
  const query =
    'mutation {\n' +
    '  register(email: "' +
    email +
    '", displayedName: "' +
    displayedName +
    '", password: "' +
    password +
    '") {\n' +
    '    id\n' +
    '    email\n' +
    '    displayedName\n' +
    '  }\n' +
    '}';
  return axios.post(server, query, {
    headers: { 'Content-Type': 'application/graphql' },
  });
};

export const postRegister = (
  email: string,
  displayedName: string,
  password: string,
) => (dispatch: any) => {
  dispatch(registerPostPending());

  return requestRegister(email, displayedName, password)
    .then((res) => {
      dispatch(registerPostSuccess(res));
      return res;
    })
    .catch((err) => {
      dispatch(reigsterPostFailure(err));
      throw err;
    });
};

export type RegisterAction =
  | ReturnType<typeof registerPostPending>
  | ReturnType<typeof registerPostSuccess>
  | ReturnType<typeof reigsterPostFailure>;

export type RegisterState = {
  pending: boolean;
  error: boolean;
  data: {
    id: string;
    email: string;
    displayedName: string;
  };
};

const initialState: RegisterState = {
  pending: false,
  error: false,
  data: {
    id: '',
    displayedName: '',
    email: '',
  },
};

export default handleActions(
  {
    [REGISTER_POST_PENDING]: (state, action) => {
      return {
        ...state,
        pending: true,
        error: false,
      };
    },
    [REGISTER_POST_SUCCESS]: (state, action) => {
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
    [REGISTER_POST_FAILURE]: (state, action) => {
      return {
        ...state,
        error: true,
      };
    },
  },
  initialState,
);
