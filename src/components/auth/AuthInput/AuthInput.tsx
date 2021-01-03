import React, { ChangeEvent, FC } from 'react';
import styles from './AuthInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  type: string;
  value: string;
  placeholder?: string;
  err?: string | undefined;
  onChange(e: ChangeEvent<HTMLInputElement>): any;
}

const AuthInput: FC<Props> = ({ type, value, placeholder, err, onChange }) => {
  return (
    <input
      className={cx('register-input', { err: err })}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default AuthInput;
