import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Register } from '../pages';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
    </Router>
  );
};

export default App;
