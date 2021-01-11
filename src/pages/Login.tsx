import React, { FC } from 'react';
import LoginContainer from '../containers/auth/LoginContainer';
import { useTitle } from 'react-use';

type Props = {
  setIsLoggedIn(value: boolean): any;
};

const Login: FC<Props> = ({ setIsLoggedIn }) => {
  useTitle('DevPub - Login');

  return <LoginContainer setIsLoggedIn={setIsLoggedIn} />;
};

export default Login;
