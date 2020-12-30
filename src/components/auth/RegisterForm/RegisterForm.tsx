import React, { ChangeEvent, FC, useState } from 'react';
import styles from './RegisterForm.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// interface Props {}

const RegisterForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setEmail(value);
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setPassword(value);
  };

  const onConfirmChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setConfirm(value);
  };

  return (
    <div className={cx('login-form')}>
      <input
        type={'email'}
        placeholder={'Email'}
        value={email}
        onChange={onEmailChange}
      />
      <input
        type={'password'}
        placeholder={'Password'}
        value={password}
        onChange={onPasswordChange}
      />
      <input
        type={'password'}
        placeholder={'Confirm Password'}
        value={confirm}
        onChange={onConfirmChange}
      />
      <input type={'submit'} value={'Sign Up'} />
    </div>
  );
};

export default RegisterForm;
