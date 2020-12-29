import React from 'react';
import styles from './NotFoundError.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function NotFoundError() {
  return (
    <div className={cx('not-found')}>
      <h1>NotFound Page</h1>
    </div>
  );
}

export default NotFoundError;
