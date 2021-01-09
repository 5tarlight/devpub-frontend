import React, { FC } from 'react';
import LoginForm from '../../components/auth/LoginForm/LoginForm';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../modules';

type Props = {
  setIsLoggedIn(value: boolean): any;
};

const LoginContainer: FC<Props> = ({ setIsLoggedIn }) => {
  // const dispatch = useDispatch();
  // const pending = useSelector((state: RootState) => state.register.pending);
  // // const error = useSelector((state: RootState) => state.register.error);

  return <LoginForm setIsLoggedIn={setIsLoggedIn} />;
};

export default LoginContainer;
