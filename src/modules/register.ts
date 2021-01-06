import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';
import { server } from '../secret';

const REGISTER_POST_PENDING = 'register/POST_PENDING' as const;
const REGISTER_POST_SUCCESS = 'register/POST_SUCCESS' as const;
const REGISTER_POST_FAILURE = 'register/POST_FAILURE' as const;
// const REGISTER = 'register/register' as const;

const registerPending = createAction(REGISTER_POST_PENDING);
const registerSuccess = createAction(REGISTER_POST_SUCCESS);
const registerFailure = createAction(REGISTER_POST_FAILURE);
// const register = createAction(REGISTER);

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
  console.log(query);
  return axios.post('http://' + server, query, {
    headers: { 'Content-Type': 'application/graphql' },
  });
};

export const postRegister = (
  email: string,
  displayedName: string,
  password: string,
) => (dispatch: any) => {
  console.log('starting process');
  dispatch(registerPending());

  return requestRegister(email, displayedName, password)
    .then((res) => {
      dispatch(registerSuccess(res));
      return res;
    })
    .catch((err) => {
      dispatch(registerFailure(err));
      throw err;
    });
};

export type RegisterAction =
  | ReturnType<typeof registerPending>
  | ReturnType<typeof registerSuccess>
  | ReturnType<typeof registerFailure>;

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
      console.log('pending');
      return {
        ...state,
        pending: true,
        error: false,
      };
    },
    [REGISTER_POST_SUCCESS]: (state, action) => {
      console.log('post request complete');
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
      console.log('post request failed');
      return {
        ...state,
        error: true,
      };
    },
    // [REGISTER]: (state, action) => {
    //   console.log('starting process')
    //   const {
    //     payload: {
    //       data: { id, email, displayedName },
    //     },
    //   } = action;
    //
    //   postRegister(state, action);
    //
    // }
  },
  initialState,
);
