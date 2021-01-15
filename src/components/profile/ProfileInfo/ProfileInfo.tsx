import React from 'react';
import styles from './ProfileInfo.scss';
import classNames from 'classnames/bind';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import ProfileInspect from '../ProfileInspect/ProfileInspect';

const cx = classNames.bind(styles);

const ProfileInfo = () => {
  return (
    <div className={cx('profile-template')}>
      <ProfilePicture />
      <ProfileInspect />
    </div>
  );
};

export default ProfileInfo;
