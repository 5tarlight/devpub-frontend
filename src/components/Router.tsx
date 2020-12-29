import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Login, NotFound, Register } from '../pages';
import { Header } from './index';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
