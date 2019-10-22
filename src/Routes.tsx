import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import ContactForm from './pages/Pets/Create';
import InfoPage from './pages/Pets/Info';
import ContactEdit from './pages/Pets/Edit';
import Login from './pages/login';
import CreateUser from './pages/Users/Create';
import UserManagement from './pages/Users/List';
import UserEdit from './pages/Users/Edit';

import {
  INFO,
  HOME,
  CREATE,
  EDIT,
  LOGIN,
  CREATE_USER,
  USER_MANAGEMENT,
  EDIT_USER,
  CREATE_USER_ADMIN
} from './helpers/urls';
import CreateUserAdmin from 'pages/Users/Admin';
import { MY_PETS } from './helpers/urls';
import MyPets from './pages/MyPet/index';
import { getUserInfo } from './helpers/user';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={LOGIN} component={Login} />
      <Route exact path={CREATE_USER} component={CreateUser} />

      {getUserInfo() ? (
        <>
          <Route exact path={HOME} component={Home} />

          <Route exact path={`${INFO}/:id`} component={InfoPage} />
          <Route exact path={CREATE} component={ContactForm} />
          <Route exact path={`${EDIT}/:id`} component={ContactEdit} />

          <Route exact path={MY_PETS} component={MyPets} />

          <Route exact path={CREATE_USER_ADMIN} component={CreateUserAdmin} />
          <Route exact path={USER_MANAGEMENT} component={UserManagement} />
          <Route exact path={`${EDIT_USER}/:id`} component={UserEdit} />
        </>
      ) : (
        <>
          <Redirect from="/" to={LOGIN} />
          <Route component={Login} />
        </>
      )}
    </Switch>
  );
};

export default Routes;
