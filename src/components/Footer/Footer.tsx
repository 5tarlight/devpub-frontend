import React, { FC } from 'react';
import style from './Footer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <div className={cx('footer')}>
      <p>&copy; 2020-{year} DevLife. All rights reserved.</p>
    </div>
  );
};

export default Footer;
