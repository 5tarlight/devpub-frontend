import React, { useEffect } from 'react';
import RegisterContainer from '../containers/auth/RegisterContainer';
import { useTitle } from 'react-use';
import { useHistory } from 'react-router-dom';

const Register = () => {
  useTitle('DevPub - Sign Up')

  const history = useHistory();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn');

    if (!isLoggedIn) history.push('/');
  }, [])


  return <RegisterContainer />;
};

export default Register;
