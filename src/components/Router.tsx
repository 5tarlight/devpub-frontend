import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Login, NotFound, Register } from '../pages';
import { Header, Footer } from './index';

type Props = {
  isLoggedIn: boolean;
  setIsLoggedIn(value: boolean): any;
};

const Router: FC<Props> = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route
          exact
          path="/login"
          render={() => <Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
