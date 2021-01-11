import React from 'react';
import { NotFoundError } from '../components';
import { useTitle } from 'react-use';

const NotFound = () => {
  useTitle('DevPub - 404 Not Found');

  return (
    <div>
      <NotFoundError />
    </div>
  );
};

export default NotFound;
