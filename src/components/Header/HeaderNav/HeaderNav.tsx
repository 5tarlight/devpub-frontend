import React, { FC } from 'react';
import styles from './Headernav.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

type Props = {
  text: string;
  to: string;
};

const HeaderNav: FC<Props> = ({ to, text }) => {
  return (
    <NavLink to={to} className={cx('header-item', 'no-drag')}>
      {text}
    </NavLink>
  );
};

export default HeaderNav;
