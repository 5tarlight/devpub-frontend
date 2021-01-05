import { handleActions } from 'redux-actions';

const REGISTER = 'register/REGISTER' as const;

export const register = (
  email: string,
  displayedName: string,
  password: string,
) => ({
  type: REGISTER,
  payload: {
    email,
    displayedName,
    password,
  },
});

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

export default handleActions(
  {
    [REGISTER]: (state, action) => {
      return {
        ...state,
        success: !state.success,
      };
    },
  },
  initialState,
);
