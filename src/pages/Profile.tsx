import React from 'react';
import ProfileInfo from '../components/profile/ProfileInfo/ProfileInfo';
import { useTitle } from 'react-use';

const Profile = () => {
  useTitle('DevPub - Profile');

  return <ProfileInfo />;
};

export default Profile;
