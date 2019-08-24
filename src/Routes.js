import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import InfoPage from './pages/Info';
import { INFO, HOME } from './helpers/urls';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={HOME} component={Home} />
      <Route exact path={`${INFO}/:id`} component={InfoPage} />
    </Switch>
  );
};

export default Routes;
