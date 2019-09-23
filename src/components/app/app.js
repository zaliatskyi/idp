import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { GamePage, Login, RulesPage } from '../pages/';
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
            component={RulesPage}
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
