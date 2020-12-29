import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Header = () => {
  const headerItems = [
    { to: '/', value: 'Home' },
    { to: '/login', value: 'Login' },
    { to: '/register', value: 'Register' },
  ];

  return (
    <header className={cx('header')}>
      {headerItems.map((item, i) => (
        <NavLink to={item.to} key={i} className={cx('header-item')}>
          {item.value}
        </NavLink>
      ))}
    </header>
  );
};

export default Header;
