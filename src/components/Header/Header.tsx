import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Header = () => {
  return (
    <div className={cx('header')}>
      <NavLink to="/" className={cx('header-item')}>
        Home
      </NavLink>
      <NavLink to="/login" className={cx('header-item')}>
        Login
      </NavLink>
      <NavLink to="/register" className={cx('header-item')}>
        Register
      </NavLink>
    </div>
  );
};

export default Header;
