import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';
import { server } from '../secret';

const REGISTER = 'register/REGISTER' as const;

export const register = createAction(REGISTER, tryRegister);
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

export type RegisterAction = ReturnType<typeof register>;

type RegisterState = {
  success: boolean;
  id?: string;
  email?: string;
  displayedName?: string;
};

const initialState: RegisterState = {
  success: false,
};

function tryRegister(email: string, displayedName: string, password: string) {
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
}

export default handleActions(
  {
    // [REGISTER]: (state: RegisterState, action: any) => {
    //   const {
    //     payload: { email, displayedName, password, setErrorMsg, redirect },
    //   } = action;
    //
    //   console.log('start register process');
    //
    //   if (serverRes.status === 400) {
    //     setErrorMsg('이미 해당 이메일이 사용 중 입니다.');
    //     return;
    //   } else {
    //     console.dir(serverRes.data);
    //     redirect('/');
    //   }
    //
    //   return {
    //     ...state,
    //     success: !state.success,
    //   };
    // },
  },
  initialState,
);
