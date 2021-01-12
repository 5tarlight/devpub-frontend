import React, { FC, MouseEvent as RMouseEvent } from 'react';
import styles from './HeaderProfileItem.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

type Props = {
  to: string;
  closeOnClick(e: RMouseEvent<HTMLAnchorElement>): any;
};

const HeaderProfileItem: FC<Props> = ({ to, closeOnClick, children }) => {
  return (
    <Link className={cx('dd-item')} to={to} onClick={closeOnClick}>
      <div className={cx('profile-link')}>{children}</div>
    </Link>
  );
};

export default HeaderProfileItem;
