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
import axios from 'axios';
import { server } from '../../../secret';
import { useHistory } from 'react-router-dom';

const cx = classNames.bind(styles);

type Props = {
  success: boolean;
  id?: string;
  email?: string;
  displayedName?: string;
  onRegister: (email: string, displayedName: string, password: string) => void;
};

const RegisterForm: FC<Props> = ({
  success,
  id,
  email: resultMail,
  displayedName: resultName,
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

  const checkEmail = () => {
    if (!email.includes('@') || email.split('@').length > 2) {
      setEmailMsg('이메일이 유효하지 않습니다.');
      return false;
    } else if (email.length > 50) {
      setEmailMsg('이메일이 너무 깁니다.');
      return false;
    } else {
      setEmailMsg('');
      return true;
    }
  };
  const checkDisplayedName = () => {
    if (!displayedName) {
      setNameMsg('사용자 이름을 입력해주세요.');
      return false;
    } else if (displayedName.length > 30) {
      setNameMsg('사용자 이름이 너무 깁니다.');
      return false;
    } else {
      setNameMsg('');
      return true;
    }
  };
  const checkPassword = () => {
    if (!password) {
      setPwMsg('비밀번호를 입력해주세요.');
      return false;
    } else if (password.length < 4) {
      setPwMsg('비밀번호가 너무 짧습니다.');
      return false;
    } else if (password.length > 20) {
      setPwMsg('비밀번호가 너무 깁니다.');
      return false;
    } else {
      setPwMsg('');
      return true;
    }
  };
  const checkConfirm = () => {
    if (confirm !== password) {
      setConfirmMsg('비밀번호가 일치하지 않습니다.');
      return false;
    } else {
      setConfirmMsg('');
      return true;
    }
  };
  const checkTos = () => {
    if (tosCheck) return true;
    else {
      alert('서비스 이용약관에 동의해 주세요.');
      return false;
    }
  };
  const checkPolicy = () => {
    if (policyCheck) return true;
    else {
      alert('개인정보 처리방침에 동의해주세요.');
      return false;
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

  const onSubmit = async (
    e: ReactMouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const ce = checkEmail();
    const cn = checkDisplayedName();
    const pc = checkPassword();
    const pcn = checkConfirm();
    const tc = checkTos();
    const plc = checkPolicy();

    if (ce && cn && pc && pcn && tc && plc) {
      onRegister(email, displayedName, password);
      alert(success);
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
      </div>
      <div className={cx('error-msg')}>{emailMsg}</div>
      <AuthInput
        err={emailMsg}
        type={'email'}
        value={email}
        placeholder={'이메일'}
        onChange={onEmailChange}
      />
      <div className={cx('error-msg')}>{nameMsg}</div>
      <AuthInput
        err={nameMsg}
        type={'text'}
        value={displayedName}
        placeholder={'사용자 이름'}
        onChange={onDisplayedNameChange}
      />
      <div className={cx('error-msg')}>{pwMsg}</div>
      <AuthInput
        err={pwMsg}
        type={'password'}
        value={password}
        placeholder={'비밀번호'}
        onChange={onPasswordChange}
      />
      <div className={cx('error-msg')}>{confirmMsg}</div>
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
