import React, { FC, Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

type Props = {
  setIsLoggedIn(value: boolean): any;
};

const LogoutContainer: FC<Props> = ({ setIsLoggedIn }) => {
  const history = useHistory();
  useEffect(() => {
    localStorage.setItem('loggedIn', '');
    localStorage.setItem('email', '');
    localStorage.setItem('displayedName', '');
    localStorage.setItem('uuid', '');
    setIsLoggedIn(false);
    history.push('/');
  }, []);

  return <Fragment />;
};

export default LogoutContainer;
