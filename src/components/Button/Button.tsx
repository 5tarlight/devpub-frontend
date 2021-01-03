import React, { FC, MouseEvent as ReactMouseEvent } from 'react';
import classNames from 'classnames/bind';
import style from './Button.scss';

const cx = classNames.bind(style);

interface Props {
  value: string;
  onClick(e: ReactMouseEvent<HTMLButtonElement, MouseEvent>): void;
}

const Button: FC<Props> = ({ value, onClick }) => {
  return (
    <button className={cx('home-btn', 'no-drag')} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
