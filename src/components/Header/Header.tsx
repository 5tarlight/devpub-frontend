import React, { FC } from 'react';
import style from './Header.scss';
import classNames from 'classnames/bind';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';

const cx = classNames.bind(style);

interface Props {
  isLoggedIn: boolean;
}

const Header: FC<Props> = ({ isLoggedIn }) => {
  // shouldLoggedIn: 0 => No matter
  // shouldLoggedIn: -1 => isLoggedIn must be false
  // shouldLoggedIn: 1 => isLoggedIn must be true

  const headerItems = [
    { to: '/', value: '홈', shouldLoggedIn: 0 },
    { to: '/login', value: '로그인', shouldLoggedIn: -1 },
    { to: '/register', value: '회원가입', shouldLoggedIn: -1 },
    { to: '/logout', value: '로그아웃', shouldLoggedIn: 1 },
    { to: '/profile', value: '프로필', shouldLoggedIn: 1 },
  ];

  return (
    <header className={cx('header')}>
      <HeaderLogo />
      <HeaderNav text={'글쓰기'} to={'/write'} />
      <HeaderNav text={'글쓰기'} to={'/write'} />
      <HeaderNav text={'글쓰기'} to={'/write'} />
    </header>
  );
};

export default Header;
