import React from 'react';
import { RegisterForm } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { register } from '../modules/register';

const RegisterContainer = () => {
  const dispatch = useDispatch();

  const success = useSelector((state: RootState) => state.register.success);
  const id = useSelector((state: RootState) => state.register.id);
  const email = useSelector((state: RootState) => state.register.email);
  const displayedName = useSelector(
    (state: RootState) => state.register.displayedName,
  );
  const onRegister = (
    email: string,
    displayedName: string,
    password: string,
  ) => {
    dispatch(register(email, displayedName, password));
  };

  return (
    <RegisterForm
      success={success}
      id={id}
      email={email}
      displayedName={displayedName}
      onRegister={onRegister}
    />
  );
};

export default RegisterContainer;
