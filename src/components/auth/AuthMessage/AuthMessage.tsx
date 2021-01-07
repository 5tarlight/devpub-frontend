import React, { FC } from 'react';
import styles from './AuthMessage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  msg: string;
};

const AuthMessage: FC<Props> = ({ msg }) => {
  return <div className={cx('error-msg')}>{msg}</div>;
};

export default AuthMessage;
