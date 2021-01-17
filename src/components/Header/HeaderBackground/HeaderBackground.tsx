import React, { FC, MouseEvent as RMouseEvent, RefObject } from 'react';
import styles from './HeaderBackground.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  onHide(e: RMouseEvent<HTMLDivElement>): any,
  ref: RefObject<HTMLDivElement>
}

const HeaderBackground: FC<Props> = ({ onHide, ref }) => {
  return <div
    className={cx('dropdown-background')}
    ref={ref}
    onClick={onHide}
  />
};

export default HeaderBackground;
