import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactForm from './pages/form';
import InfoPage from './pages/Info';
import { INFO, HOME, CREATE, EDIT, LOGIN } from './helpers/urls';
import ContactEdit from './pages/Edit';
import Login from './pages/login';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={HOME} component={Home} />
      <Route exact path={`${INFO}/:id`} component={InfoPage} />
      <Route exact path={CREATE} component={ContactForm} />
      <Route exact path={`${EDIT}/:id`} component={ContactEdit} />
      <Route exact path={LOGIN} component={Login} />
    </Switch>
  );
};

export default Routes;
