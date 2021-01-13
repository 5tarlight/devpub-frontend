import React from 'react';
import styles from './ProfileInfo.scss';
import classNames from 'classnames/bind';
import unknownProfile from '../../Header/HeaderProfile/unknwon.png';

const cx = classNames.bind(styles);

const ProfileInfo = () => {
  return (
    <div>
      <div className={cx('profile-template')}>
        <div className={cx('picture-box')}>
          <img src={unknownProfile} width={'512px'} height={'512px'} alt={''} />
          <button>사진 업로드</button>
          <button>사진 제거</button>
        </div>
      </div>
      <div className={cx('profile-info')}>
        {localStorage.getItem('displayedName')}
      </div>
    </div>
  );
};

export default ProfileInfo;
