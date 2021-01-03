import React from 'react';
import styles from './NotFoundError.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const moveHome = () => {
  document.location.href = '/';
};

const NotFoundError = () => {
  return (
    <div className={cx('not-found')}>
      <div className={cx('nf-title')}>
        <img src="/img/fox.png" />
        <h1>Oops! 잘못 찾아오셨습니다.</h1>
        <h3>이동하려는 주소가 올바른지 확인해주세요.</h3>
      </div>
      <button className={cx('home-btn', 'no-drag')} onClick={moveHome}>
        메인으로 돌아가기
      </button>
    </div>
  );
};

export default NotFoundError;
