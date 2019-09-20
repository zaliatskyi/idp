import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { GamePage, Login, Rules } from '../pages/';
import './reset.css';
import './app.scss';

const App = () => {
  return (
    <main role="main" className="main">
        <Switch>
          <Route
            path="/"
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
