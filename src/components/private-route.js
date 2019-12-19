import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isValidToken } from '../actions/sign-in';

class PrivateRoute extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      validToken: null
    };
    this.checkToken = this.checkToken.bind(this);
    this.setValidToken = this.setValidToken.bind(this);
  }

  componentDidMount () {
    this.checkToken();
  }

  setValidToken (isValid) {
    this.setState({ validToken: isValid });
  };

  async checkToken () {
    await isValidToken().then(result => {
      this.setValidToken(result);
    })
  }

  render () {
    if (this.state.validToken === null) {
      return <div>CHECKING TOKEN...</div>;
    }

    return this.state.validToken ? <Route {...this.props} component={this.props.component} /> : <Redirect to={{pathname: '/'}} />;
  }
}

export default PrivateRoute;