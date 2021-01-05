import React, { FC } from 'react';
import style from './Footer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Footer: FC = () => {
  return (
    <div className={cx('footer')}>
      <p>ⓒ 2020-2021 DevLife All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
