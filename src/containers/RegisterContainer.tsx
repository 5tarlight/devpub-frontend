import React from 'react';
import { RegisterForm } from '../components';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import { postRegister } from '../modules/register';

const RegisterContainer = () => {
  const pending = useSelector((state: RootState) => state.register.pending);
  const error = useSelector((state: RootState) => state.register.error);
  const id = useSelector((state: RootState) => state.register.data.id);
  const email = useSelector((state: RootState) => state.register.data.email);
  const displayedName = useSelector(
    (state: RootState) => state.register.data.displayedName,
  );
  const onRegister = (
    email: string,
    displayedName: string,
    password: string,
  ) => () => {
    postRegister(email, displayedName, password);
  };

  return (
    <RegisterForm
      success={pending}
      id={id}
      email={email}
      displayedName={displayedName}
      onRegister={onRegister}
    />
  );
};

export default RegisterContainer;
