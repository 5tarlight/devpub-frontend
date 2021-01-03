import React from 'react';
import styles from './NotFoundError.scss';
import classNames from 'classnames/bind';
import { useHistory } from 'react-router-dom';
import fox from './fox.png';
import Button from '../../Button/Button';

const cx = classNames.bind(styles);

const NotFoundError = () => {
  const history = useHistory();

  const redirect = () => {
    history.push('/');
  };

  return (
    <div className={cx('not-found')}>
      <div className={cx('nf-title')}>
        <img src={fox} alt={'(╯°□°）╯︵ ┻━┻'} />
        <h1>Oops! 잘못 찾아오셨습니다.</h1>
        <h3>이동하려는 주소가 올바른지 확인해주세요.</h3>
      </div>
      <Button value={'메인으로 돌아가기'} onClick={redirect} />
    </div>
  );
};

export default NotFoundError;
