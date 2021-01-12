import React, { FC } from 'react';
import style from './Footer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Footer: FC = () => {
  const thisYear = new Date().getFullYear();

  return (
    <div className={cx('footer')}>
      <p>ⓒ 2020-{thisYear} DevLife All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
