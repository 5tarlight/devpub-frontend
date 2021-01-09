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
import axios from 'axios';
import { server } from '../../../secret';

const cx = classNames.bind(styles);

const LoginForm: FC = () => {
  const [loginMsg, setLoginMsg] = useState('');
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
      const query = `query {
  login(email:"${email}", password:"${password}") {
    success
    user {
      id
      email
      displayedName
    }
  }
}`;
      axios
        .post('http://' + server, query, {
          headers: { 'Content-Type': 'application/graphql' },
        })
        .then((r) => {
          return r.data;
        })
        .then((data) => {
          if (!Boolean(data.success)) {
            setLoginMsg('메일이나 비밀번호가 일치하지 않습니다.');
            return;
          }
        });
    }
  };

  const loginStyle = {
    margin: '0px',
    textDecoration: 'none',
  };

  return (
    <div className={cx('login-form')}>
      <div className={cx('login-title')}>
        <h1>로그인</h1>
        <p>데브라이프 계정으로 모든 서비스를 이용하실 수 있습니다.</p>
      </div>
      <AuthMessage msg={loginMsg} noDecorate />
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
