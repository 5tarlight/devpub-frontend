import React, { useEffect } from 'react';
import styles from './ProfileInfo.scss';
import classNames from 'classnames/bind';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import ProfileInspect from '../ProfileInspect/ProfileInspect';
import { useHistory } from 'react-router-dom';

const cx = classNames.bind(styles);

const ProfileInfo = () => {
  const history = useHistory();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn');

    if (!isLoggedIn) history.push('/login');
  }, [])

  return (
    <div className={cx('profile-template')}>
      <ProfilePicture />
      <ProfileInspect />
    </div>
  );
};

export default ProfileInfo;
