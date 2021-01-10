import React, { FC } from 'react';
import styles from './HeaderProfileItem.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

type Props = {
  to: string;
};

const HeaderProfileItem: FC<Props> = ({ to, children }) => {
  return (
    <div className={cx('profile-link')}>
      <NavLink className={cx('dd-item')} to={to}>
        {children}
      </NavLink>
    </div>
  );
};

export default HeaderProfileItem;
