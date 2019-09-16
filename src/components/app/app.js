import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import { GamePage, Login, Rules } from '../pages/';
import './reset.css';
import './app.scss';

const App = () => {
  return (
    <main role="main" className="main">
        <Header />
        <Switch>
          <Route
            path="/login"
            component={Login}
            exact />

          <Route
            path="/rules"
            component={Rules}
            exact />

          <Route
            path="/game"
            component={GamePage}
            />
        </Switch>
    </main>
  );
};

export default App;
