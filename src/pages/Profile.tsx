import React, { useEffect } from 'react';
import ProfileInfo from '../components/profile/ProfileInfo/ProfileInfo';
import { useTitle } from 'react-use';
import { useHistory } from 'react-router-dom';

const Profile = () => {
  useTitle('DevPub - Profile');

  const history = useHistory();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn');

    if (!isLoggedIn) history.push('/login');
  }, [])


  return <ProfileInfo />;
};

export default Profile;
