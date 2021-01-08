import React, {
  MouseEvent as ReactMouseEvent,
  ChangeEvent,
  FC,
  useState,
} from 'react';
import styles from './RegisterForm.scss';
import classNames from 'classnames/bind';
import AuthInput from '../AuthInput/AuthInput';
import Button from '../../Button/Button';
import { useHistory } from 'react-router-dom';
import AuthMessage from '../AuthMessage/AuthMessage';
import {
  checkConfirm,
  checkDisplayedName,
  checkEmail,
  checkPassword,
  checkPolicy,
  checkTos,
} from '../authUtil';

const cx = classNames.bind(styles);

type Props = {
  success: boolean;
  id?: string;
  email?: string;
  displayedName?: string;
  onRegister: (email: string, displayedName: string, password: string) => void;
};

const RegisterForm: FC<Props> = ({
  // success,
  // id,
  // email: resultMail,
  // displayedName: resultName,
  onRegister,
}) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [displayedName, setDisplayedName] = useState('');
  const [nameMsg, setNameMsg] = useState('');
  const [password, setPassword] = useState('');
  const [pwMsg, setPwMsg] = useState('');
  const [confirm, setConfirm] = useState('');
  const [confirmMsg, setConfirmMsg] = useState('');
  const [policyCheck, setPolicyCheck] = useState(false);
  const [tosCheck, setTosCheck] = useState(false);

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setEmail(value);
    setEmailMsg('');
  };
  const onDisplayedNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setDisplayedName(value);
    setNameMsg('');
  };
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setPassword(value);
    setPwMsg('');
  };
  const onConfirmChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setConfirm(value);
    setConfirmMsg('');
  };

  const onSubmit = async (
    e: ReactMouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const ce = checkEmail(email, setEmailMsg);
    const cn = checkDisplayedName(displayedName, setNameMsg);
    const pc = checkPassword(password, setPwMsg);
    const pcn = checkConfirm(confirm, password, setConfirmMsg);
    const tc = checkTos(tosCheck);
    const plc = checkPolicy(policyCheck);

    if (ce && cn && pc && pcn && tc && plc) {
      onRegister(email, displayedName, password);
      history.push('/register/success');
    }
  };

  const policyStyle = {
    color: 'gray',
    marginTop: '20px',
    fontSize: '12px',
  };

  return (
    <div className={cx('register-form')}>
      <div className={cx('register-title')}>
        <h1>회원가입</h1>
        <p>데브라이프 계정으로 모든 서비스를 이용하실 수 있습니다.</p>
        {/*{success ? '처리중...' : '대기중...'}*/}
      </div>
      <AuthMessage msg={emailMsg} />
      <AuthInput
        err={emailMsg}
        type={'email'}
        value={email}
        placeholder={'이메일'}
        onChange={onEmailChange}
      />
      <AuthMessage msg={nameMsg} />
      <AuthInput
        err={nameMsg}
        type={'text'}
        value={displayedName}
        placeholder={'사용자 이름'}
        onChange={onDisplayedNameChange}
      />
      <AuthMessage msg={pwMsg} />
      <AuthInput
        err={pwMsg}
        type={'password'}
        value={password}
        placeholder={'비밀번호'}
        onChange={onPasswordChange}
      />
      <AuthMessage msg={confirmMsg} />
      <AuthInput
        err={confirmMsg}
        type={'password'}
        value={confirm}
        placeholder={'비밀번호 확인'}
        onChange={onConfirmChange}
      />
      <div className={cx('policyCheck')}>
        <input
          type={'checkbox'}
          checked={tosCheck}
          onChange={() => setTosCheck(!tosCheck)}
        />
        <label>서비스 이용약관에 동의합니다.</label>
      </div>
      <div className={cx('policyCheck')}>
        <input
          type={'checkbox'}
          checked={policyCheck}
          onChange={() => setPolicyCheck(!policyCheck)}
        />
        <label>개인정보 처리방침에 동의합니다.</label>
      </div>
      <Button value={'회원가입'} onClick={onSubmit} />
      <p style={policyStyle}>
        데브라이프 서비스에 가입함으로써 이용약관, 개인정보처리방침에
        동의합니다.
      </p>
    </div>
  );
};

export default RegisterForm;
