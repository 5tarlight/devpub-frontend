import React, { FC } from 'react';
import styles from './AuthMessage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  msg: string;
  noDecorate?: boolean;
};

const AuthMessage: FC<Props> = ({ msg, noDecorate = false }) => {
  return (
    <div className={cx('error-msg', { 'no-decorate': noDecorate })}>{msg}</div>
  );
};

export default AuthMessage;
