import React from 'react';
import styles from './ProfileInspect.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ProfileInspect = () => {
  return (
    <div className={cx('profile-info')}>
      {localStorage.getItem('displayedName')}
    </div>
  );
};

export default ProfileInspect;
