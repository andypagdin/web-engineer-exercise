import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from '../containers/sign-in.jsx';
import Apps from '../containers/Apps.jsx';
import Users from '../containers/Users.jsx';
import PrivateRoute from './private-route';

export default function app () {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <PrivateRoute exact path="/apps" component={Apps} />
        <PrivateRoute path="/apps/:id" component={Users} />
      </Switch>
    </Router>
  );
};