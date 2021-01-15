import React, { FC, useEffect } from 'react';
import LoginContainer from '../containers/auth/LoginContainer';
import { useTitle } from 'react-use';
import { useHistory } from 'react-router-dom';

type Props = {
  setIsLoggedIn(value: boolean): any;
};

const Login: FC<Props> = ({ setIsLoggedIn }) => {
  useTitle('DevPub - Login');

  const history = useHistory();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn');

    if (isLoggedIn) history.push('/');
  }, [])


  return <LoginContainer setIsLoggedIn={setIsLoggedIn} />;
};

export default Login;
