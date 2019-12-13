import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { isValidToken } from '../actions/sign-in';

import SignIn from '../containers/sign-in.jsx';
import Apps from '../containers/Apps.jsx';
import Users from '../containers/Users.jsx';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => (
    rest.tokenValid === true
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
};

class app extends React.Component {
  constructor (props){
    super(props);
    this.state = { tokenValid: false, checkingToken: true };
    this.setTokenValid = this.setTokenValid.bind(this);
  }

  componentWillMount () {
    isValidToken().then(result => {
      this.setTokenValid(result);
    });
  }

  setTokenValid (token) {
    this.setState({ tokenValid: token, checkingToken: false });
  };

  render () {
    if (this.state.checkingToken) {
      return 'CHECKING TOKEN...';
    }

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <PrivateRoute exact path="/apps" component={Apps} tokenValid={this.state.tokenValid} />
          <PrivateRoute path="/apps/:id" component={Users} tokenValid={this.state.tokenValid} />
        </Switch>
      </Router>
    );
  };
}

export default app;