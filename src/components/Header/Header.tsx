import React, { FC } from 'react';
import style from './Header.scss';
import classNames from 'classnames/bind';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';
import HeaderProfile from './HeaderProfile/HeaderProfile';

const cx = classNames.bind(style);

interface Props {
  isLoggedIn: boolean;
}

const Header: FC<Props> = ({ isLoggedIn }) => {
  return (
    <header className={cx('header')}>
      <HeaderLogo />
      <HeaderNav text={'글쓰기'} to={'/write'} />
      <HeaderNav text={'글쓰기'} to={'/write'} />
      <HeaderNav text={'글쓰기'} to={'/write'} />
      <HeaderProfile isLoggedIn={isLoggedIn} />
    </header>
  );
};

export default Header;
