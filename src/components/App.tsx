import React, { useEffect, useState } from 'react';
import Router from './Router';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.dir(Boolean(localStorage.getItem('loggedIn')));
    setIsLoggedIn(Boolean(localStorage.getItem('loggedIn')));
  }, []);

  return <Router isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />;
};

export default App;
