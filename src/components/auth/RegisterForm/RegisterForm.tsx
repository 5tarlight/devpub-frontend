import React, {
  MouseEvent as ReactMouseEvent,
  ChangeEvent,
  FC,
  useState,
} from 'react';
import styles from './RegisterForm.scss';
import classNames from 'classnames/bind';
import AuthInput from '../AuthInput/AuthInput';

const cx = classNames.bind(styles);

const RegisterForm: FC = () => {
  const [email, setEmail] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [displayedName, setDisplayedName] = useState('');
  const [nameMsg, setNameMsg] = useState('');
  const [password, setPassword] = useState('');
  const [pwMsg, setPwMsg] = useState('');
  const [confirm, setConfirm] = useState('');
  const [confirmMsg, setConfirmMsg] = useState('');

  const checkEmail = () => {
    if (email.includes('@')) {
      setEmailMsg('');
      return true;
    } else {
      setEmailMsg('Email is not valid');
      return false;
    }
  };
  const checkDisplayedName = () => {
    if (displayedName) {
      setNameMsg('');
      return true;
    } else {
      setNameMsg('DisplayedName is required');
      return false;
    }
  };
  const checkPassword = () => {
    if (!password) {
      setPwMsg('Password is required');
      return false;
    } else if (password.length < 4) {
      setPwMsg('Password is too short');
      return false;
    } else if (password.length > 20) {
      setPwMsg('Password is too long');
      return false;
    } else {
      setPwMsg('');
      return true;
    }
  };
  const checkConfirm = () => {
    if (confirm !== password) {
      setConfirmMsg('Password is not equal');
    } else {
      setConfirmMsg('');
    }
  };

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

    setConfirm(value);
  };

  const onSubmit = (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const ce = checkEmail();
    const cn = checkDisplayedName();
    const pc = checkPassword();
    const pcn = checkConfirm();

    if (ce && cn && pc && pcn) {
      // Register here
    }
  };

  return (
    <div className={cx('register-form')}>
      <AuthInput
        type={'email'}
        value={email}
        placeholder={'Email'}
        onChange={onEmailChange}
      />
      <div className={cx('error-msg')}>{emailMsg}</div>
      <AuthInput
        type={'text'}
        value={displayedName}
        placeholder={'Displayed Name'}
        onChange={onDisplayedNameChange}
      />
      <div className={cx('error-msg')}>{nameMsg}</div>
      <AuthInput
        type={'password'}
        value={password}
        placeholder={'Password'}
        onChange={onPasswordChange}
      />
      <div className={cx('error-msg')}>{pwMsg}</div>
      <AuthInput
        type={'password'}
        value={confirm}
        placeholder={'Confirm Password'}
        onChange={onConfirmChange}
      />
      <div className={cx('error-msg')}>{confirmMsg}</div>
      <button className={cx('submit')} onClick={onSubmit}>
        Sign Up
      </button>
    </div>
  );
};

export default RegisterForm;
