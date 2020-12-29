import React, { useState } from 'react';
import Router from './Router';

const App = () => {
  const [isLoggedIn] = useState(false);

  return <Router isLoggedIn={isLoggedIn} />;
};

export default App;
