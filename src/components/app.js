import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from '../containers/sign-in.jsx';
import Apps from '../containers/Apps.jsx';
import Users from '../containers/Users.jsx';

const app = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/apps" component={Apps} />
        <Route path="/apps/:id" component={Users} />
      </Switch>
    </Router>
  )
}

export default app