import React from 'react';
import styles from './ProfilePicture.scss';
import classNames from 'classnames/bind';
import unknownProfile from '../../Header/HeaderProfile/unknwon.png';

const cx = classNames.bind(styles);

const ProfilePicture = () => {
  return (
    <div className={cx('picture-box')}>
      <img src={unknownProfile} width={'512px'} height={'512px'} alt={''} />
      <button>사진 업로드</button>
      <button>사진 제거</button>
    </div>
  );
};

export default ProfilePicture;
