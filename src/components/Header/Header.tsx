import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

interface Props {
  isLoggedIn: boolean;
}

const Header: FC<Props> = ({ isLoggedIn }) => {
  // shouldLoggedIn: 0 => No matter
  // shouldLoggedIn: -1 => isLoggedIn must be false
  // shouldLoggedIn: 1 => isLoggedIn must be true

  const headerItems = [
    { to: '/', value: '🏠 Home', shouldLoggedIn: 0 },
    { to: '/login', value: '🔑 Login', shouldLoggedIn: -1 },
    { to: '/register', value: '🔐 Register', shouldLoggedIn: -1 },
    { to: '/profile', value: '🧑 Profile', shouldLoggedIn: 1 },
  ];

  const navs = headerItems
    .filter(
      (i) =>
        i.shouldLoggedIn == 0 ||
        (i.shouldLoggedIn == -1 && !isLoggedIn) ||
        (i.shouldLoggedIn == 1 && isLoggedIn),
    )
    .map((item, i) => (
      <NavLink to={item.to} key={i} className={cx('header-item', 'no-drag')}>
        {item.value}
      </NavLink>
    ));

  return <header className={cx('header')}>{navs}</header>;
};

export default Header;
