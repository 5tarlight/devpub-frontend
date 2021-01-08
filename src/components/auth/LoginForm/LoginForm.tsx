import React, { ChangeEvent, FC, useState } from 'react';
import styles from './LoginForm.scss';
import classNames from 'classnames/bind';
import AuthInput from '../AuthInput/AuthInput';
import Button from '../../Button/Button';
import AuthMessage from '../AuthMessage/AuthMessage';

const cx = classNames.bind(styles);

const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [password, setPassword] = useState('');
  const [pwErr, setPwErr] = useState('');

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

  return (
    <div className={cx('login-form')}>
      <AuthMessage msg={emailErr} />
      <AuthInput
        type={'text'}
        placeholder={'Email'}
        value={email}
        err={emailErr}
        onChange={onEmailChange}
      />
      <AuthMessage msg={pwErr} />
      <AuthInput
        type={'password'}
        placeholder={'Password'}
        value={password}
        err={pwErr}
        onChange={onPasswordChange}
      />
      <Button value={'Log In'} onClick={(e) => e.preventDefault()} />
    </div>
  );
};

export default LoginForm;
