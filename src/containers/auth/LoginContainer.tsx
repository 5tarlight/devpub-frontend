import React, { FC } from 'react';
import LoginForm from '../../components/auth/LoginForm/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';

const LoginContainer: FC = () => {
  const dispatch = useDispatch();
  const pending = useSelector((state: RootState) => state.register.pending);
  // const error = useSelector((state: RootState) => state.register.error);

  return <LoginForm />;
};

export default LoginContainer;
