import React, { FC } from 'react';
import LoginContainer from '../containers/auth/LoginContainer';

type Props = {
  setIsLoggedIn(value: boolean): any;
};

const Login: FC<Props> = ({ setIsLoggedIn }) => {
  return <LoginContainer setIsLoggedIn={setIsLoggedIn} />;
};

export default Login;
