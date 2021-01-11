import React from 'react';
import RegisterContainer from '../containers/auth/RegisterContainer';
import { useTitle } from 'react-use';

const Register = () => {
  useTitle('DevPub - Sign Up');

  return <RegisterContainer />;
};

export default Register;
