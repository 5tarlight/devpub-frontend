import React, { ChangeEvent, FC } from 'react';
import styles from './AuthInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  type: string;
  value: string;
  onChange(e: ChangeEvent<HTMLInputElement>): any;
}

const AuthInput: FC<Props> = ({ type, value, onChange }) => {
  return (
    <input
      className={cx('register-input')}
      type={type}
      placeholder={'Email'}
      value={value}
      onChange={onChange}
    />
  );
};

export default AuthInput;
