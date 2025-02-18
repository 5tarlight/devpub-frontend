import React, { MouseEvent as RMouseEvent } from 'react';
import styles from './HeaderLogo.scss';
import classNames from 'classnames/bind';
import logo from './logo.png';
import { useHistory } from 'react-router-dom';

const cx = classNames.bind(styles);

const HeaderLogo = () => {
  const history = useHistory();
  const handleClick = (e: RMouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    if (window.location.pathname !== '/') history.push('/');
  };

  return (
    <img
      className={cx('header-logo', 'no-drag')}
      onClick={handleClick}
      src={logo}
      alt={'DevPub'}
      height={'48px'}
      width={'48px'}
    />
  );
};

export default HeaderLogo;
