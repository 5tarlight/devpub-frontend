import React, { createRef, FC, MouseEvent as RMouseEvent } from 'react';
import styles from './HeaderProfile.scss';
import unknownProfile from './unknwon.png';
import classNames from 'classnames/bind';
import HeaderProfileItem from '../HeaderProfileItem/HeaderProfileItem';
import HeaderBackground from '../HeaderBackground/HeaderBackground';

const cx = classNames.bind(styles);

type Props = {
  isLoggedIn: boolean;
};

const HeaderProfile: FC<Props> = ({ isLoggedIn }) => {
  const dropdown = createRef<HTMLDivElement>();
  const background = createRef<HTMLDivElement>();
  const handleShow = (e: RMouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    dropdown.current?.classList.toggle('show');
    background.current?.classList.toggle('show');
  };
  const closeOnClick = () => {
    dropdown.current?.classList.toggle('show');
    background.current?.classList.toggle('show');
  };

  return (
    <div className={cx('header-profile', 'no-drag')}>
      <img
        className={cx('profile-icon')}
        src={unknownProfile}
        alt={'user'}
        onClick={handleShow}
      />
      <HeaderBackground onHide={closeOnClick} refer={background} />
      <div ref={dropdown} className={cx('dropdown-content')}>
        {isLoggedIn ? (
          <>
            <HeaderProfileItem closeOnClick={closeOnClick} to={'/profile'}>
              프로필
            </HeaderProfileItem>
            <HeaderProfileItem closeOnClick={closeOnClick} to={'/logout'}>
              로그아웃
            </HeaderProfileItem>
          </>
        ) : (
          <>
            <HeaderProfileItem closeOnClick={closeOnClick} to={'/login'}>
              로그인
            </HeaderProfileItem>
            <HeaderProfileItem closeOnClick={closeOnClick} to={'/register'}>
              회원가입
            </HeaderProfileItem>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderProfile;
