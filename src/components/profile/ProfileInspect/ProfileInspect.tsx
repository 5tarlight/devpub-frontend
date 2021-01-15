import React, { useState } from 'react';
import styles from './ProfileInspect.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ProfileInspect = () => {
  const [nameMode, setNameMode] = useState(false);
  const [emailMode, setEmailMode] = useState(false);

  const toggleNameMode = () => {
    setNameMode((current) => !current);
  };
  const toggleEmailMode = () => {
    setEmailMode((current) => !current);
  };

  return (
    <div className={cx('profile-info')}>
      {nameMode ? (
        <div>
          <input />
          <button>저장</button>
        </div>
      ) : (
        <div>
          <h3 className={cx('displayed-name')}>
            {localStorage.getItem('displayedName')}
          </h3>
          <button onClick={toggleNameMode}>이름 변경</button>
        </div>
      )}
      {emailMode ? (
        <div>
          <input />
          <button>저장</button>
        </div>
      ) : (
        <div>
          <h4 className={cx('email')}>{localStorage.getItem('email')}</h4>
          <button onClick={toggleEmailMode}>이메일 변경</button>
        </div>
      )}
      <button>비밀번호 변경</button>
    </div>
  );
};

export default ProfileInspect;
