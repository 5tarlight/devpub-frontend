export type setFunction<T> = (value: T) => any;

export const checkEmail = (email: string, setEmail: setFunction<string>) => {
  if (
    !email.includes('@') ||
    email.split('@').length > 2 ||
    !email.includes('.') ||
    email.split('.').length < 2
  ) {
    setEmail('이메일이 유효하지 않습니다.');
    return false;
  } else if (email.length > 50) {
    setEmail('이메일이 너무 깁니다.');
    return false;
  } else {
    setEmail('');
    return true;
  }
};

export const checkDisplayedName = (
  displayedName: string,
  setNameMsg: setFunction<string>,
) => {
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

export const checkPassword = (
  password: string,
  setPwMsg: setFunction<string>,
) => {
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

export const checkConfirm = (
  confirm: string,
  password: string,
  setConfirmMsg: setFunction<string>,
) => {
  if (confirm !== password) {
    setConfirmMsg('비밀번호가 일치하지 않습니다.');
    return false;
  } else {
    setConfirmMsg('');
    return true;
  }
};

export const checkTos = (tos: boolean) => {
  if (tos) return true;
  else {
    alert('서비스 이용약관에 동의해 주세요.');
    return false;
  }
};

export const checkPolicy = (policy: boolean) => {
  if (policy) return true;
  else {
    alert('개인정보 처리방침에 동의해주세요.');
    return false;
  }
};
