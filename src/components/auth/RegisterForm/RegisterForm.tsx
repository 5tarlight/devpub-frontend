import React, { ChangeEvent, FC, useState } from 'react';
import styles from './RegisterForm.scss';
import classNames from 'classnames/bind';
import AuthInput from '../AuthInput/AuthInput';

const cx = classNames.bind(styles);

const RegisterForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [confirmMsg, setConfirmMsg] = useState('');

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

    if (value !== password) {
      setConfirmMsg('Password is not equal');
    } else {
      setConfirmMsg('');
    }

    setConfirm(value);
  };

  return (
    <div className={cx('register-form')}>
      <AuthInput type={'email'} value={email} onChange={onEmailChange} />
      <AuthInput
        type={'password'}
        value={password}
        onChange={onPasswordChange}
      />
      <AuthInput type={'password'} value={confirm} onChange={onConfirmChange} />
      <div className={cx('confirm-msg')}>{confirmMsg}</div>
      <input type={'submit'} value={'Sign Up'} />
    </div>
  );
};

export default RegisterForm;
