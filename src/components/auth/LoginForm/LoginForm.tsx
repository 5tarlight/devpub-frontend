import React, {
  ChangeEvent,
  FC,
  useState,
  MouseEvent as RMouseEvent,
} from 'react';
import styles from './LoginForm.scss';
import classNames from 'classnames/bind';
import AuthInput from '../AuthInput/AuthInput';
import Button from '../../Button/Button';
import AuthMessage from '../AuthMessage/AuthMessage';
import { checkEmail, checkPassword } from '../authUtil';
import { relative } from 'path';

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
    setEmailErr('');
  };
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setPassword(value);
    setPwErr('');
  };

  const onSubmit = (e: RMouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const ce = checkEmail(email, setEmailErr);
    const pc = checkPassword(password, setPwErr);

    if (ce && pc) {
      alert('starting login process');
    }
  };

  return (
    <div className={cx('login-form')}>
      <div className={cx('login-title')}>
        <h1>로그인</h1>
        <p>데브라이프 계정으로 모든 서비스를 이용하실 수 있습니다.</p>
      </div>
      <AuthMessage msg={emailErr} />
      <AuthInput
        type={'text'}
        placeholder={'이메일'}
        value={email}
        err={emailErr}
        onChange={onEmailChange}
      />
      <AuthMessage msg={pwErr} />
      <AuthInput
        type={'password'}
        placeholder={'비밀번호'}
        value={password}
        err={pwErr}
        onChange={onPasswordChange}
      />
      <div className={cx('saveId')}>
        <input type={'checkbox'} />
        <label>아이디 저장</label>
      </div>
      <Button value={'로그인'} onClick={onSubmit} />
    </div>
  );
};

export default LoginForm;
