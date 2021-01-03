import React, { ChangeEvent, FC, useState } from 'react';
import styles from './RegisterForm.scss';
import classNames from 'classnames/bind';
import AuthInput from '../AuthInput/AuthInput';

const cx = classNames.bind(styles);

const RegisterForm: FC = () => {
  const [email, setEmail] = useState('');
  const [displayedName, setDisplayedName] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [confirmMsg, setConfirmMsg] = useState('');

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setEmail(value);
  };

  const onDisplayedNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setDisplayedName(value);
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
      <AuthInput
        type={'email'}
        value={email}
        placeholder={'Email'}
        onChange={onEmailChange}
      />
      <AuthInput
        type={'text'}
        value={displayedName}
        placeholder={'Displayed Name'}
        onChange={onDisplayedNameChange}
      />
      <AuthInput
        type={'password'}
        value={password}
        placeholder={'Password'}
        onChange={onPasswordChange}
      />
      <AuthInput
        type={'password'}
        value={confirm}
        placeholder={'Confirm Password'}
        onChange={onConfirmChange}
      />
      <div className={cx('error-msg')}>{confirmMsg}</div>
      <input type={'submit'} value={'Sign Up'} />
    </div>
  );
};

export default RegisterForm;
